import { observable, computed, autorun } from 'mobx';


export default class UserStore
{
    @observable move = 'right';

    @observable geoLocation = {
          lat : 0,
          lng : 0
    }
}
