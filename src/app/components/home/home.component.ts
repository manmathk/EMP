import { Component, OnInit } from '@angular/core';
import { EmpUtilityService } from './../../services/emp-utility.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  formGroup:FormGroup;
  public numberOfLikes = 0;
  public numberOfDislikes = 0;
  public currentComment: any ;

  constructor(public empUtilityService: EmpUtilityService) { }

  public ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup(){
    this.formGroup = new FormGroup({
      "commentFormControl" : new FormControl()
    });
  }

  public addLikes(): void {
    this.numberOfLikes += 1;
  }

  public addDislikes(): void {
    this.numberOfDislikes += 1;
  }

  public postComment(item): void {
    this.currentComment = this.formGroup.value.commentFormControl ;
    if (this.empUtilityService?.postList?.length > 0){
      this.addingComment(item);
    } else {
      let newPost = new Post();
      newPost.postId = item.postId;
      newPost.commentList.push(this.currentComment);
      newPost.numberOfComment = newPost?.commentList?.length;
      this.empUtilityService?.postList.push(newPost);
    }
  }

  public addingComment(item){
    const currentPost: any = this.empUtilityService?.postList.filter(x => x.postId === item.postId);
    currentPost?.commentList.push(this.currentComment);
    currentPost.numberOfComment =  currentPost.commentList?.length;
  }

  addNewPost(){
    debugger;
    this.empUtilityService.newPost.next(true);
  }

}

export class Post {
 public postId: number;
 public receiverFirstName: string;
 public receiverLastName: string;
 public senderFirstName: string;
 public senderLastName: string;
 public postDescription: string;
 public postDate: Date;
 public src: 'assets/images/woodland.jpeg';
 public numberOfComment: number;
 public commentList = [];
 public numberOfLikes: number;
 public numberOfDislikes: number;
}
