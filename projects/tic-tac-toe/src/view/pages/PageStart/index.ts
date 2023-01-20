class PageStart {
  el: null | HTMLDivElement;

  constructor() {
    this.el = null;
  }

  onInit() {
    this.el = document.getElementById("page-start") as HTMLDivElement;
  }

  onDestroy() {
    this.el = null;
  }
}

export default PageStart;
