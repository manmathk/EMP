import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../components/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class EmpUtilityService {
  newPost : BehaviorSubject<boolean>  = new BehaviorSubject(false);
  public postList: Post[] = [];

  postLists = [
    { numberOfComment: 1, postId: '1', firstName: 'Anna', lastName: 'Strong', src: 'assets/images/woodland.jpeg', numberOfLikes: '2', numberOfDislikes: '2' },
    { numberOfComment: 2, postId: '2', firstName: 'Rough', lastName: 'Strong', src: 'assets/images/GD.jpg', numberOfLikes: '3', numberOfDislikes: '2' },
    { numberOfComment: 2, postId: '3', firstName: 'Lanna', lastName: 'Neil', src: 'https://material.angular.io/assets/img/examples/shiba2.jpg', numberOfLikes: '40', numberOfDislikes: '2'},
    { numberOfComment: 2, postId: '4', firstName: 'Sanna', lastName: 'Strong', src: 'assets/images/woodland.jpeg', numberOfLikes: '5', numberOfDislikes: '2' },
    { numberOfComment: 2, postId: '5', firstName: 'Anna', lastName: 'Strong', src: 'assets/images/GD.jpg', numberOfLikes: '10', numberOfDislikes: '2' },
    { numberOfComment: 2, postId: '6', firstName: 'Anna', lastName: 'Strong', src: 'assets/images/woodland.jpeg', numberOfLikes: '10', numberOfDislikes: '2' },
    { numberOfComment: 2, postId: '7', firstName: 'Anna', lastName: 'Strong', src: 'assets/images/GD.jpg', numberOfLikes: '10', numberOfDislikes: '2' },
    { numberOfComment:2, postId: '8', firstName: 'Anna', lastName: 'Strong', src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      numberOfLikes: '10', numberOfDislikes: '2'},
    { numberOfComment: 2, postId: '9', firstName: 'Anna', lastName: 'Strong', src: 'assets/images/woodland.jpeg', numberOfLikes: '10', numberOfDislikes: '2' },
    { numberOfComment: 2, postId: '10', firstName: 'Anna', lastName: 'Strong', src: 'assets/images/GD.jpg', numberOfLikes: '10', numberOfDislikes: '2' },
    { numberOfComment: 2, postId: '11', firstName: 'Anna', lastName: 'Strong', src: 'assets/images/woodland.jpeg', numberOfLikes: '10', numberOfDislikes: '2' },
    { numberOfComment: 2, postId: '12', firstName: 'Anna', lastName: 'Strong', src: 'assets/images/GD.jpg', numberOfLikes: '10', numberOfDislikes: '2' },
    { numberOfComment:2, postId: '13', firstName: 'Anna', lastName: 'Strong', src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      numberOfLikes: '10', numberOfDislikes: '2' }
  ];
  constructor() { }
  // addNewPost(){
  //   this.newPost.next(true);
  // }
}
