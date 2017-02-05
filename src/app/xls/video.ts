export class Video {
  title: string;
  description: string;
  filename: string;
  tag: string;
  duration: string;

  // yahoo field definitions
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

  // cms field definitions
  public static readonly CMS_NAME = "Name";
  public static readonly CMS_DISPLAY_NAME = "Display Name";
  public static readonly CMS_MOBTITLE = "Mobtitle";
  public static readonly CMS_RUN_TIME = "Running time";
  public static readonly CMS_PRICE = "Price";
  public static readonly CMS_MOBCAST = "MobCast";
  public static readonly CMS_FORMAT = "Format";
  public static readonly CMS_SAMSUNG_RUNTIME = "Samsung Runtime";
  public static readonly CMS_VIDEO_RATE = "Video Rate";
  public static readonly CMS_RIGHT_DETAILS = "Rights Details";
  public static readonly CMS_VIDEO_TAG = "Video Tag";
  public static readonly CMS_SHORT_DESC = "Short Description";
  public static readonly CMS_DESC = "Description";
  public static readonly CMS_CAST = "Cast";
  public static readonly CMS_DIRECTOR = "Director";
  public static readonly CMS_PROD_YEAR = "Production Year";
  public static readonly CMS_USER_RATE = "User Rating";
  public static readonly CMS_LS_IMG = "Landscape Image";
  public static readonly CMS_THUMB_IMG = "Thumbnail Image1";
  public static readonly CMS_SMART_TV = "Smart TV";
  public static readonly CMS_H1_TITLE = "H1 Title";
  public static readonly CMS_META_KEYWORD = "Meta_Keyword"
  public static readonly CMS_META_DESC = "Meta_Description";
  public static readonly CMS_CONTENT_DATE = "V_Content_Date"
  public static readonly CMS_COUNT = "V_Count";
  public static readonly CMS_COLORVIDEO = "V_Colorvideo";
  public static readonly CMS_COUNTRY ="Geo Country";
  public static readonly CMS_GROUP_DETAILS = "Geo Group Details";
  public static readonly CMS_WHITELIST_DETAILS = "White List Details"
  public static readonly CMS_PARTNER = "Video Partner Attach";
  public static readonly CMS_VIDEO_FILE_NAME = "Video File Name";
  public static readonly CMS_TRAILER_NAME = "Video Trailer Name";
  public static readonly CMS_VIDEO_FILE = "video file";
  public static readonly CMS_TRAILER_FILE = "trailer file";
  public static readonly CMS_IOS_APP = "iOS apps & video path";
  public static readonly CMS_IOS_TRAILER = "iOS apps & trailer path";
  public static readonly CMS_VIDEO_FORMAT = "Video Format Details";
  public static readonly CMS_YOUTUBE = "YouTube Url";
  public static readonly CMS_CATEGORY = "Category";
  public static readonly CMS_PLATFORM = "Platform";
  public static readonly CMS_ACTIVE = "Active";

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
  public toCMS(): string {
    // always only get the first name from tag as a cast
    let cast = this.tag.split(',')[0];
    let rate = this.getRandomInt(5, 8);

    return '{'
      + '"' + Video.CMS_NAME + '":"' + this.title + '",'
      + '"' + Video.CMS_DISPLAY_NAME + '":"' + this.title + '",'
      + '"' + Video.CMS_MOBTITLE + '":"' + this.title + '",'
      + '"' + Video.CMS_RUN_TIME + '":"' + this.duration + '",'
      + '"' + Video.CMS_PRICE + '":"' + '0.99' + '",'
      + '"' + Video.CMS_MOBCAST + '":"' + cast + '",'
      + '"' + Video.CMS_FORMAT + '":"' + "HD" + '",'
      + '"' + Video.CMS_SAMSUNG_RUNTIME + '":"' + this.duration + '",'
      + '"' + Video.CMS_VIDEO_RATE + '":"' + rate + '",'
      + '"' + Video.CMS_RIGHT_DETAILS + '":"' + 'Online,Mobile Browser,Andoird,iOS,Connected TV,Nokia' + '",'
      + '"' + Video.CMS_VIDEO_TAG + '":"' + 'Entertainment' + '",'
      + '"' + Video.CMS_SHORT_DESC + '":"' + this.description + '",'
      + '"' + Video.CMS_DESC + '":"' + this.description + '",'
      + '"' + Video.CMS_CAST + '":"' + cast + '",'
      + '"' + Video.CMS_DIRECTOR + '":"' + '' + '",'
      + '"' + Video.CMS_PROD_YEAR + '":"' +'' + '",'
      + '"' + Video.CMS_USER_RATE + '":"' + rate + '",'
      + '"' + Video.CMS_LS_IMG + '":"' + this.filename + '.jpg' + '",'
      + '"' + Video.CMS_THUMB_IMG + '":"' + this.filename + '.jpg' + '",'
      + '"' + Video.CMS_SMART_TV + '":"' + this.filename + '.jpg' + '",'
      + '"' + Video.CMS_H1_TITLE + '":"' + this.title + '",'
      + '"' + Video.CMS_META_KEYWORD + '":"' + this.tag + '",'
      + '"' + Video.CMS_META_DESC + '":"' + this.description + '",'
      + '"' + Video.CMS_CONTENT_DATE + '":"' + '' + '",'
      + '"' + Video.CMS_COUNT + '":"' + '' + '",'
      + '"' + Video.CMS_COLORVIDEO + '":"' + '' + '",'
      + '"' + Video.CMS_COUNTRY + '":"' + '' + '",'
      + '"' + Video.CMS_GROUP_DETAILS + '":"' + '' + '",'
      + '"' + Video.CMS_WHITELIST_DETAILS + '":"' + '' + '",'
      + '"' + Video.CMS_PARTNER + '":"' + 'Splash News & Picture Agency' + '",'
      + '"' + Video.CMS_VIDEO_FILE_NAME + '":"' + this.filename + '",'
      + '"' + Video.CMS_TRAILER_NAME + '":"' + '' + '",'
      + '"' + Video.CMS_VIDEO_FILE + '":"' + '440kbps,1200kbps, 3000kbps' + '",'
      + '"' + Video.CMS_TRAILER_FILE + '":"' + '' + '",'
      + '"' + Video.CMS_IOS_APP + '":"' + '64kbps,440kbps,1200kbps' + '",'
      + '"' + Video.CMS_IOS_TRAILER + '":"' + '' + '",'
      + '"' + Video.CMS_VIDEO_FORMAT + '":"' + '' + '",'
      + '"' + Video.CMS_YOUTUBE + '":"' + '' + '",'
      + '"' + Video.CMS_CATEGORY + '":"' + 'Celebrity News' + '",'
      + '"' + Video.CMS_PLATFORM + '":"' + 'WF_WP,WF_Sony,WF_Pana,WF_MobBrw,WF_LG,WF_iOS,WF_And,WF_Sam,WF_touch' + '",'
      + '"' + Video.CMS_ACTIVE + '":"' + '1"'
    + '}'
  }

   /**
   * Returns a random integer between min (inclusive) and max (inclusive)
   * Using Math.round() will give you a non-uniform distribution!
   */
  private getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
