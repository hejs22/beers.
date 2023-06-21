import { DATA_EMPTY_SRC, DATA_NOT_FOUND_SRC, ERROR_404_SRC } from './ImageConstants';

export class Error404 {
  static header = 'Nothing here.';
  static caption = 'Apart from this cute dog. But seriously, this page does not exist.';
  static imageSrc = ERROR_404_SRC;
}

export class ErrorNoData {
  static header = 'Oops!';
  static caption = 'We failed to find any beers. Try again later.';
  static imageSrc = DATA_NOT_FOUND_SRC;
}

export class ErrorDataEmpty {
  static header = 'Nothing to show!';
  static caption = 'Not even one beer left. We are on our way to brew more!';
  static imageSrc = DATA_EMPTY_SRC;
}
