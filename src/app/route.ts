
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberListComponent } from './member-list/member-list.component';
import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoute: Routes = [
    { path: 'home', component: HomeComponent},
    {
        path : '',
        runGuardsAndResolvers : 'always',
        canActivate : [AuthGuard],
        children : [
            { path: 'lists', component: ListsComponent},
            { path: 'members', component: MemberListComponent},
            { path: 'messages', component: MessagesComponent}
        ]
    },
    { path: '**', redirectTo : 'home' , pathMatch: 'full'},
];