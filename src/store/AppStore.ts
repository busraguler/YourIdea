import {observable, action} from 'mobx';
import {arrayExtensions} from 'mobx/dist/internal';

class AppStore {
  @observable userEmail = 'null';
  @observable userPassword = null;
  @observable
  comments = [];

  @observable name = null;

  @action changeEmail(props) {
    this.userEmail = props;
  }

  @action changePassword(props) {
    this.userPassword = props;
  }
}
export default new AppStore();
