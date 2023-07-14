abstract class TakePhotos {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getRealTime(): number {
    return 8;
  }
}

class Instagrams extends TakePhotos {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }
  getSepia(): void {
    console.log("sepia");
  }
}

const obj = new Instagrams("test", "Test", 3);
