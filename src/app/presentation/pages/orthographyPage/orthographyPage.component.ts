import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
// import { ChatMessageComponent } from '../../components/chat-bubbles/chatMessage/chatMessage.component';
// import { MyMessageComponent } from '../../components/chat-bubbles/myMessage/myMessage.component';
// en tsconfig.json hemos definido en paths alias para la carpeta componentes
// import { ChatMessageComponent } from '@components/chat-bubbles/chatMessage/chatMessage.component';
// import { MyMessageComponent } from '@components/chat-bubbles/myMessage/myMessage.component';
// o también usar directamente el index.ts que hemos creado bajo components
import { ChatMessageComponent, MyMessageComponent } from '@components/index';

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [CommonModule, ChatMessageComponent, MyMessageComponent],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent {}
