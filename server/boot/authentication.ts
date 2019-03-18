import {BootScript} from "@mean-expert/boot-script";

@BootScript()
class Authentication {
  constructor(app: any) {
    app.enableAuth();
  }

  public add(): number {
    return 1;
  }
}

module.exports = Authentication;
