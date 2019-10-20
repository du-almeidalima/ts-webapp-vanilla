import BaseComponent from '../../core/base.component';
import './header.component.html';

export default class HeaderComponent extends BaseComponent{
    private holder : HTMLElement;
    constructor(holder: HTMLElement) {
        super('./components/header/header.component.html');
        this.holder = holder;
    }

    public async render(){
        const templateHtmlCollection = await this.getTemplate();
        for(let i = 0; templateHtmlCollection.length >= i; i++){
            this.holder.appendChild(templateHtmlCollection.item(i));
        }
    }
}