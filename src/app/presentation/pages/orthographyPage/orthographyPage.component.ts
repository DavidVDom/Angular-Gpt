import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
// import { ChatMessageComponent } from '../../components/chat-bubbles/chatMessage/chatMessage.component';
// import { MyMessageComponent } from '../../components/chat-bubbles/myMessage/myMessage.component';
// en tsconfig.json hemos definido en paths alias para la carpeta componentes
// import { ChatMessageComponent } from '@components/chat-bubbles/chatMessage/chatMessage.component';
// import { MyMessageComponent } from '@components/chat-bubbles/myMessage/myMessage.component';
// o también usar directamente el index.ts que hemos creado bajo components
import {
  ChatMessageComponent,
  MyMessageComponent,
  TextMessageBoxComponent,
  TextMessageBoxEvent,
  TextMessageBoxFileComponent,
  TextMessageBoxSelectComponent,
  TextMessageEvent,
  TypingLoaderComponent,
} from '@components/index';
import { Message } from '@interfaces/message.interface';
import { OpenAiService } from '../../services/openai.service';

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
    TextMessageBoxSelectComponent,
  ],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent {
  public messages = signal<Message[]>([{ text: 'Hola Mundo', isGpt: true }]);
  public isLoading = signal(false);
  public openAiService = inject(OpenAiService); // es igual que si lo inyectáramos por el constructor

  handleMessage(prompt: string) {
    console.log(prompt);
  }

  handleMessageWithFile({ prompt, file }: TextMessageEvent) {
    console.log({ prompt, file });
  }

  handleMessageWithSelect(event: TextMessageBoxEvent) {
    console.log(event);
  }
}
