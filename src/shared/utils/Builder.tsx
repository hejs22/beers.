import { ReactElement } from 'react';
import { PulseLoader } from 'react-spinners';

class Builder {
  private _status: string = 'loading';

  success: ReactElement = (<></>);
  error: ReactElement = (<></>);
  idle: ReactElement = (<></>);
  loading: ReactElement = (<PulseLoader cssOverride={{ margin: 'auto' }} />);

  constructor(status: string) {
    this._status = status;
  }

  static createResult(status: string) {
    if (!status || !status.length)
      throw new Error(
        "Status must be defined. Possible values: 'success', 'loading', 'idle', 'error'. Any other value will be treated as 'error'."
      );
    return new Builder(status);
  }

  onSuccess(result: ReactElement) {
    this.success = result;
    return this;
  }

  onError(result: ReactElement) {
    this.error = result;
    return this;
  }

  onIdle(result: ReactElement) {
    this.idle = result;
    return this;
  }

  onLoading(result: ReactElement) {
    this.loading = result;
    return this;
  }

  build(): ReactElement {
    switch (this._status) {
      case 'success':
        return this.success;
      case 'loading':
        return this.loading;
      case 'idle':
        return this.idle;
      default:
        return this.error;
    }
  }
}

export default Builder;
