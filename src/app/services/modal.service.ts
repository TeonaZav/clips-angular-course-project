import { Injectable } from '@angular/core';

interface Imodal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: Imodal[] = [];

  constructor() {}

  register(id: string) {
    this.modals.push({
      id,
      visible: false,
    });
  }

  unregister(id: string) {
    this.modals = this.modals.filter((el) => el.id !== id);
  }

  isModalVisible(id: string): boolean {
    return Boolean(this.modals.find((el) => el.id === id)?.visible);
  }
  toggleModal(id: string) {
    const modal = this.modals.find((el) => el.id === id);
    if (modal) {
      modal.visible = !modal.visible;
    }
  }
}
