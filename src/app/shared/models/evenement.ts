/**
 * Evenement
 */
export class Evenement {

  private _id: string;
  private _image: string;
  private _startDate: Date;
  private _endDate: Date;
  private _summary: string;
  private _content: string;

  constructor(fields: {
    id: string,
    image: string,
    startDate: Date,
    endDate: Date,
    summary: string,
    content: string
  }) {
    if (fields) {
      this.id = fields.id;
      this.image = fields.image;
      this.startDate = fields.startDate;
      this.endDate = fields.endDate;
      this.summary = fields.summary;
      this.content = fields.content;
    }
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get startDate(): Date {
    return this._startDate;
  }

  set startDate(value: Date) {
    this._startDate = value;
  }

  get endDate(): Date {
    return this._endDate;
  }

  set endDate(value: Date) {
    this._endDate = value;
  }

  get summary(): string {
    return this._summary;
  }

  set summary(value: string) {
    this._summary = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }
}
