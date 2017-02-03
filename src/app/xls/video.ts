export class Video {
  title: string;
  description: string;
  filename: string;
  tag: string;
  duration: string;

  // field definitions
  public static readonly FIELD_TITLE = "TITLE";
  public static readonly FIELD_FILENAME = "FileName";
  public static readonly FIELD_DESCRIPTION = "DESCRIPTION";
  public static readonly FIELD_IMAGE = "IMAGE";
  public static readonly FIELD_STREAM = "STREAM";
  public static readonly FIELD_TOPCATEGORY = "TOPCATEGORY";
  public static readonly FIELD_SECONDCATEGORY = "SECONDCATEGORY";
  public static readonly FIELD_RELATEDTAG = "RELATEDTAG";

  // base path
  public static readonly BASE_PATH = "/wowtvvideos/images/";

  private static readonly MON_NAME = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  // convert to a json object yahoo needed
  public toYahoo() : string {
    var d = new Date();
    var year = d.getFullYear();

    return '{'
      + '"' + Video.FIELD_TITLE + '":"' + this.title + '",'
      + '"' + Video.FIELD_FILENAME + '":"' + this.filename + '",'
      + '"' + Video.FIELD_DESCRIPTION + '":"' + this.description + '",'
      + '"' + Video.FIELD_IMAGE + '":"' + Video.BASE_PATH + year + '/' + Video.MON_NAME[d.getMonth()] + '/' + d.getDate() + '/' + this.filename + '.jpg' + '",'
      + '"' + Video.FIELD_STREAM + '":"' + Video.BASE_PATH + year + '/' + Video.MON_NAME[d.getMonth()] + '/' + d.getDate() + '/' + this.filename + '.mov' + '",'
      + '"' + Video.FIELD_TOPCATEGORY + '":"' + 'Entertainment' + '",'
      + '"' + Video.FIELD_SECONDCATEGORY + '":"' + '' + '",'
      + '"' + Video.FIELD_RELATEDTAG + '":"' + '"'
    + '}'
  }

  // convert to a json object cms needed
  public toCMS(): String {
    return ''
  }
}
