export class ActionCreator<T> {
  constructor(
    public type: string = 'NOT_SET',
    public payload?: T
  ) {}
}

export class ActionCreatorFactory {
  static create?<T>(type: string, defaultPayloadValue?: any) {
    return (payload?: T): ActionCreator<any> => {
      const _payload = payload || typeof payload !== 'undefined' ? payload : defaultPayloadValue;
      return new ActionCreator<T>(type, _payload);
    };
  }

}
