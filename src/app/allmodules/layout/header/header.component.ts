import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';
import Pusher from 'pusher-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  checkLogin: boolean = false;
  checkToken: any = localStorage.getItem('token') ? localStorage.getItem('token') : 0;
  user_name = localStorage.getItem('user_name')
    ? localStorage.getItem('user_name')
    : '';
  profile_img = localStorage.getItem('profile_img')
    ? localStorage.getItem('profile_img')
    : '';
  user_id: any = localStorage.getItem('client_id');

  pusher: any;
  channel: any;
  channel_name: any = '';
  messageData: any = [];
  msgCount: any = 0;

  constructor(private clientService: ClientService) {
    // this.checkLoginUser();
    this.pusher = new Pusher(environment.pusherAppKey, {
      cluster: environment.pusherCluster
    });
  }

  ngOnInit(): void {
    if (this.checkToken) {
      this.checkLogin = true;
    }
    if (this.checkToken) {
      var msgCount = this.pusher.channel('msgCount_' + this.user_id);
      if (msgCount) {
        return;
      }
      else {
        console.log();
        const channel = this.pusher.subscribe('msgCount_' + this.user_id);
        channel.bind('getMessageUnreadCount', (data: any) => {
          this.msgCount = data['count'];
        });
        this.getUnreadMsg();
      }
    }


  }

  logout() {
    this.checkLogin = false;
    this.clientService.logout();
  }

  checkLoginUser() {
    this.clientService.checkLogin().subscribe((res: any) => {
      this.checkLogin = true;

    },
      err => {
        this.checkLogin = false;
      }
    )
  }

  getUnreadMsg() {
    this.clientService.getUnreadMsg().subscribe(
      (res: any) => {
        this.msgCount = res;
      },
      (err) => {
        console.warn(err);
      }
    );
  }

}