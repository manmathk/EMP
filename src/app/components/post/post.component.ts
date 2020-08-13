import { EmpUtilityService } from 'src/app/services/emp-utility.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Post } from '../home/home.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postFormGroup:FormGroup;
  currentPost : Post;
  constructor(private readonly empUtilityService:EmpUtilityService) { }

  ngOnInit(): void {
    this.createFormGroup();
  }
  createFormGroup(){

    this.postFormGroup = new FormGroup({
      "receiverLastName" : new FormControl(),
      "receiverFirstName" : new FormControl(),
      "senderFirstName" : new FormControl(),
      "senderLastName" : new FormControl(),
      "description" : new FormControl()
    });
  }
  submitPost(){
    this.currentPost = this.postFormGroup.value;
    let newPost = new Post();
    newPost.postId = 1;
    newPost.receiverFirstName = this.postFormGroup.value.receiverFirstName;
    newPost.receiverLastName = this.postFormGroup.value.receiverLastName;
    newPost.senderFirstName = this.postFormGroup.value.senderFirstName;
    newPost.senderLastName = this.postFormGroup.value.senderLastName;
    newPost.postDescription = this.postFormGroup.value.description;
    newPost.postDate = new Date();
    newPost.commentList = [];
    newPost.numberOfComment = 0;
    this.empUtilityService?.postList.push(newPost);
    // this.empUtilityService?.postList.push(this.currentPost);
  }
}
