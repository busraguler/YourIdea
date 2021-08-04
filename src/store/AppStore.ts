import {observable, action} from 'mobx';
import {arrayExtensions} from 'mobx/dist/internal';

class AppStore {
  @observable commentContent: string = '';
  @observable commentName: string = '';
}
export default new AppStore();
