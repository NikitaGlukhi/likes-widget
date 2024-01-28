import { Input, Output, Component, EventEmitter } from '@angular/core';

import { ILike } from './models';

@Component({
  selector: 'app-likes-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent {
  @Input() likes?: ILike[];
  // @ts-ignore
  @Input() likedByUser: () => boolean;

  @Output() onLikedOrDisliked = new EventEmitter<boolean>();

  likeOrDislike(): void {
    this.onLikedOrDisliked.emit(!this.likedByUser());
  }
}
