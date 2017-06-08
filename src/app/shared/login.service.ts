import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
    
    private user: Observable<firebase.User>;

    constructor(public afAuth: AngularFireAuth) {
        this.user = afAuth.authState;
    }
    
    redirecturl: string;

    authUser(): Observable<firebase.User>{
        return this.user;
    }

    login(user: User) {
        return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    }

    logout() {
        return this.afAuth.auth.signOut();
    }

}