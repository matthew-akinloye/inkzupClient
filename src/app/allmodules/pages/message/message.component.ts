import { Component, OnInit ,VERSION } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/service/client.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import Pusher from 'pusher-js';
import { Location } from '@angular/common';
import { ViewportScroller } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  name = "Angular " + VERSION.major;
  chatForm!: FormGroup;
  messageData: any = [];
  getconversationData: any = [];
  isLoad: boolean = false;
  submitted: boolean = false;
  //pusher variable
  pusher: any;
  channel: any;
  channel_name: any = '';
  receiver_id: any = '';
  user_id: any = '';
  user_name: any = '';
  profile_img: any = '';
  client_id: any = localStorage.getItem('client_id');

  msgUserDetails: any = [];
  imagesPreview: any = [];
  images: any = [];

  conversation_id: any = '';
  conversastion_channel: any = '';
  artist_id: any = '';
  mobile: any;
  constructor(
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private scroller: ViewportScroller,
    private router: Router
  ) {
    this.pusher = new Pusher(environment.pusherAppKey, {
      cluster: environment.pusherCluster,
    });
  }

  ngOnInit(): void {
    this.chatForm = new FormGroup({
      message: new FormControl('', [Validators.required]),
      filename: new FormControl('', []),
      channel_name: new FormControl('', []),
      receiver_id: new FormControl('', []),
      type: new FormControl('', []),
    });
    this.actRoute.queryParams.subscribe((params) => {
      if (params.conversastion_id) {
        this.conversation_id = params.conversastion_id;
        this.conversastion_channel = params.channel;

        this.artist_id = params.artist;
        this.getConversation(
          this.conversation_id,
          this.conversastion_channel,
          this.artist_id
        );
        // getConversation(to_id: any, channel_name: any, receiver_id: any)
      } else if (params.artist) {
        this.StartMessaging(params.artist);
      }
    });
    this.getUserId();
    var chat_list_channel = this.pusher.channel('chat_' + this.client_id);
    if (chat_list_channel) {
      return;
    } else {
      const channel = this.pusher.subscribe('chat_' + this.client_id);
      channel.bind('GetMessages', (data: any) => {
        this.messageData = data['messages'];
        // this.messageData.push(data['message']);
      });
      this.getMessages();
    }
    Pusher.logToConsole = true;

    // if (window.screen.width === 360) {
    //   // 768px portrait
    //   this.mobile = true;
    // }
  }
  
  goDown1() {
    this.scroller.scrollToAnchor("targetRed");
  }
  //Get Messages
  getMessages() {
    this.isLoad = true;
    this.clientService.getMessages().subscribe(
      (res: any) => {
        this.messageData = res;
        this.isLoad = false;
        return;
      },
      (err) => {
        this.isLoad = false;
      }
    );
  }
  //Fetch User Id
  getUserId() {
    this.clientService.getUserId().subscribe(
      (res: any) => {
        this.user_id = res;
      },
      (err) => {}
    );
  }
  getConversation(to_id: any, channel_name: any, receiver_id: any) {
    this.chatForm.reset();
    // Remove all handlers for the `new-comment` event

    if (this.channel_name) {
      this.pusher.unsubscribe(this.channel_name);
    }

    let formData = new FormData();
    formData.append('conversations_id', to_id);
    formData.append('channel_name', channel_name);
    formData.append('user_id', this.user_id);
    this.isLoad = true;
    this.channel_name = channel_name;
    this.receiver_id = receiver_id;
    //Show view data

    this.clientService.getconversation(formData).subscribe(
      (res: any) => {
        this.isLoad = false;
        this.getconversationData = res.conversastion;
        this.msgUserDetails = res.userData;
        this.scrollMessageBottom();
      },
      (err) => {
        this.isLoad = false;
      }
    );
    var channel = this.pusher.channel(channel_name);
    if (channel) {
      if (channel.subscribed) {
        return;
      } else {
        this.channel = this.pusher.subscribe(this.channel_name);
        this.channel.bind('SendMessage', (data: any) => {
          if (this.user_id == this.receiver_id) {
            return;
          }
          this.getconversationData.push(data['message']);
        });
      }
    } else {
      this.channel = this.pusher.subscribe(this.channel_name);
      this.channel.bind('SendMessage', (data: any) => {
        if (this.user_id == this.receiver_id) {
          return;
        }
        this.getconversationData.push(data['message']);
      });
    }
  }
  sendMessage() {
    if (this.chatForm.invalid) {
      return;
    }
    this.submitted = true;
    var channel = this.pusher.channel(this.channel_name);
    var formData: any = new FormData();
    formData.append('message', this.chatForm.value.message);
    formData.append('channel_name', this.channel_name);

    formData.append('filename', '');
    formData.append('receiver_id', this.receiver_id);
    formData.append('type', 1);
    formData.append(
      'timeZone',
      Intl.DateTimeFormat().resolvedOptions().timeZone
    );
    this.clientService.sendMessage(formData).subscribe(
      (res: any) => {
        this.chatForm.reset();
        this.images = [];
        this.imagesPreview = [];
        this.getMessagesData();
        // this.getconversationData.push(res);
        if (!channel) {
          this.getconversationData.push(res['message']);
        }
      },
      (err) => {}
    );
  }
  /**
   * Scroll view to bottom of message window
   */
  scrollMessageBottom(): void {}

  back(): void {
    this.location.back();
  }

  async StartMessaging(artist_id: any) {
    var formData: any = new FormData();
    formData.append('artist_id', artist_id);
    this.isLoad = true;
    this.clientService.startMessaging(formData).subscribe(
      (res: any) => {
        this.getConversation(res.id, res.channel_name, artist_id);
        this.isLoad = false;
      },
      (err) => {
        this.isLoad = false;
      }
    );
  }

  getMessagesData() {
    this.clientService.getMessages().subscribe(
      (res: any) => {
        this.messageData = res;
        return;
      },
      (err) => {}
    );
  }

  preview(event: any) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.imagesPreview.push(event.target.result);
        };
        reader.readAsDataURL(event.target.files[i]);
        this.images.push(event.target.files[i]);
      }
    }
  }

  sendImages(event: any) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          // this.imagesPreview.push(event.target.result);
        };
        reader.readAsDataURL(event.target.files[i]);
        this.images.push(event.target.files[i]);
      }
      var formData: any = new FormData();
      formData.append('channel_name', this.channel_name);
      if (this.images.length > 0) {
        for (var i = 0; i < this.images.length; i++) {
          formData.append('file[]', this.images[i]);
        }
      }
      var channel = this.pusher.channel(this.channel_name);
      formData.append('receiver_id', this.receiver_id);
      formData.append('type', 1);
      formData.append(
        'timeZone',
        Intl.DateTimeFormat().resolvedOptions().timeZone
      );
      this.images = [];
      this.clientService.sendMessage(formData).subscribe(
        (res: any) => {
          this.chatForm.reset();
          this.images = [];
          this.getMessagesData();
          if (!channel) {
            this.getconversationData.push(res);
          }
        },
        (err) => {}
      );
    }
  }
}
