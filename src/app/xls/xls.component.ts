import { Component, OnInit } from '@angular/core';
import { Video } from './video';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-xls',
  templateUrl: './xls.component.html',
  styleUrls: ['./xls.component.css']
})
export class XlsComponent implements OnInit {

  private textValue = "";
  private log: string ='';
  private videos = [Video];
  private settings = {
    hideSubHeader: true,
    columns: {
      TITLE: {
        title: 'TITLE',
        sort: false,
        filter: false
      },
      FileName: {
        title: 'FileName',
        sort: false,
        filter: false
      },
      DESCRIPTION: {
        title: 'DESCRIPTION',
        sort: false,
        filter: false
      },
      IMAGE: {
        title: 'IMAGE',
        sort: false,
        filter: false
      },
      STREAM: {
        title: 'STREAM',
        sort: false,
        filter: false
      },
      TOPCATEGORY: {
        title: 'TOPCATEGORY',
        sort: false,
        filter: false
      },
      SECONDCATEGORY: {
        title: 'SECONDCATEGORY',
        sort: false,
        filter: false
      },
      RELATEDTAG: {
        title: 'RELATEDTAG',
        sort: false,
        filter: false
      }
    }
  };

  // TODO: how to simplified the code
  // cms table settings
  private cmsSettings = {
    hideSubHeader: true,
    columns: {
      [Video.CMS_NAME]: {
        title: Video.CMS_NAME,
        sort: false,
        filter: false
      },
      [Video.CMS_DISPLAY_NAME]: {
        title: Video.CMS_DISPLAY_NAME,
        sort: false,
        filter: false
      },
      [Video.CMS_MOBTITLE]: {
        title: Video.CMS_MOBTITLE,
        sort: false,
        filter: false
      },
      [Video.CMS_RUN_TIME]: {
        title: Video.CMS_RUN_TIME,
        sort: false,
        filter: false
      },
      [Video.CMS_PRICE]: {
        title: Video.CMS_PRICE,
        sort: false,
        filter: false
      },
      [Video.CMS_MOBCAST]: {
        title: Video.CMS_MOBCAST,
        sort: false,
        filter: false
      },
      [Video.CMS_FORMAT]: {
        title: Video.CMS_FORMAT,
        sort: false,
        filter: false
      },
      [Video.CMS_SAMSUNG_RUNTIME]: {
        title: Video.CMS_SAMSUNG_RUNTIME,
        sort: false,
        filter: false
      },
      [Video.CMS_VIDEO_RATE]: {
        title: Video.CMS_VIDEO_RATE,
        sort: false,
        filter: false
      },
      [Video.CMS_RIGHT_DETAILS]: {
        title: Video.CMS_RIGHT_DETAILS,
        sort: false,
        filter: false
      },
      [Video.CMS_VIDEO_TAG]: {
        title: Video.CMS_VIDEO_TAG,
        sort: false,
        filter: false
      },
      [Video.CMS_SHORT_DESC]: {
        title: Video.CMS_SHORT_DESC,
        sort: false,
        filter: false
      },
      [Video.CMS_DESC]: {
        title: Video.CMS_DESC,
        sort: false,
        filter: false
      },
      [Video.CMS_SAMSUNG_RUNTIME]: {
        title: Video.CMS_SAMSUNG_RUNTIME,
        sort: false,
        filter: false
      },
      [Video.CMS_CAST]: {
        title: Video.CMS_CAST
      },
      [Video.CMS_DIRECTOR]: {
        title: Video.CMS_DIRECTOR
      },
      [Video.CMS_PROD_YEAR]: {
        title: Video.CMS_PROD_YEAR
      },
      [Video.CMS_USER_RATE]: {
        title: Video.CMS_USER_RATE
      },
      [Video.CMS_LS_IMG]: {
        title: Video.CMS_LS_IMG
      },
      [Video.CMS_THUMB_IMG]: {
        title: Video.CMS_THUMB_IMG
      },
      [Video.CMS_SMART_TV]: {
        title: Video.CMS_SMART_TV
      },
      [Video.CMS_H1_TITLE]: {
        title: Video.CMS_H1_TITLE
      },
      [Video.CMS_META_KEYWORD]: {
        title: Video.CMS_META_KEYWORD
      },
      [Video.CMS_META_DESC]: {
        title: Video.CMS_META_DESC
      },
      [Video.CMS_CONTENT_DATE]: {
        title: Video.CMS_CONTENT_DATE
      },
      [Video.CMS_COUNT]: {
        title: Video.CMS_COUNT
      },
      [Video.CMS_COLORVIDEO]: {
        title: Video.CMS_COLORVIDEO
      },
      [Video.CMS_COUNTRY]: {
        title: Video.CMS_COUNTRY
      },
      [Video.CMS_GROUP_DETAILS]: {
        title: Video.CMS_GROUP_DETAILS
      },
      [Video.CMS_WHITELIST_DETAILS]: {
        title: Video.CMS_WHITELIST_DETAILS
      },
      [Video.CMS_PARTNER]: {
        title: Video.CMS_PARTNER
      },
      [Video.CMS_VIDEO_FILE_NAME]: {
        title: Video.CMS_VIDEO_FILE_NAME
      },
      [Video.CMS_TRAILER_NAME]: {
        title: Video.CMS_TRAILER_NAME
      },
      [Video.CMS_VIDEO_FILE]: {
        title: Video.CMS_VIDEO_FILE
      },
      [Video.CMS_TRAILER_FILE]: {
        title: Video.CMS_TRAILER_FILE
      },
      [Video.CMS_IOS_APP]: {
        title: Video.CMS_IOS_APP
      },
      [Video.CMS_IOS_TRAILER]: {
        title: Video.CMS_IOS_TRAILER
      },
      [Video.CMS_VIDEO_FORMAT]: {
        title: Video.CMS_VIDEO_FORMAT
      },
      [Video.CMS_YOUTUBE]: {
        title: Video.CMS_YOUTUBE
      },
      [Video.CMS_CATEGORY]: {
        title: Video.CMS_CATEGORY
      },
      [Video.CMS_PLATFORM]: {
        title: Video.CMS_PLATFORM
      },
      [Video.CMS_ACTIVE]: {
        title: Video.CMS_ACTIVE
      }
    }
  }

  private yahooData: LocalDataSource;
  private cmsData: LocalDataSource;

  constructor() {
    this.yahooData = new LocalDataSource();
    this.cmsData = new LocalDataSource();
  }

  ngOnInit() {
  }

  // NOTICE: It will not work if the format changed in splash-video.com
  private update(value: string): void {

    let video = this.createVideo(value);
    // append video to videos
    let str = video.toYahoo()
    console.log(str);
    this.yahooData.add(JSON.parse(str));
    this.yahooData.reset();

    let str2 = video.toCMS()
    console.log(str2);
    this.cmsData.add(JSON.parse(str2));
    this.cmsData.reset();

    this.textValue = '';
  }

  private createVideo(value: string) : Video {
    var video = new Video();
    var lines = value.split('\n');
    for(var i = 0;i < lines.length;i++){
      const line = lines[i];
      const array = line.split(':	');
      const key = array[0];
      const val = array[1];

      // TODO: remove "" inside description or title
      // title from headline
      if (key === 'Headline') {
        // remove SNTV -
        const data = val.split('SNTV - ')
        video.title = data[1].split('"').join("'");
      }

      // description from caption
      if (key === 'Caption') {
        const data = val.split(' Ref: ');
        video.description = data[0].split('"').join("'");
      }

      // duration from Length of clip (mm:ss)
      // to remove splash logo in end of the video should -3 from seconds
      if (key === 'Length of clip (mm:ss)') {
        const data = val.split(':')
        var m = parseInt(data[0]);
        var s = parseInt(data[1])
        if (s > 3) {
          s = s - 3;
        } else {
          m = m - 1;
          s = s + 57;
        }
        if (m < 0) {
          m = 0;
        }
        video.duration = '00:' + Video.leftPad(m,2) + ':' + Video.leftPad(s,2) + ".000";
      }

      // from keywords to tag
      if (key === 'Keywords') {
        video.tag = val;
      }

      // from ref to filename
      if (key === 'REF') {
        video.filename = val.toLowerCase();
      }
    }
    return video;
  }

  private export() {

    this.yahooData.getAll().then(
      (data) => {
        if (data.length > 0) {
          //console.log(JSON.stringify(data))
          // this.downloadCSV({filename:'yahoo.csv',data:data});

          // save to excel
          this.exportToExcel('yahoo', data)
        }
      }
    )
  }

  private exportCMS() {
    this.cmsData.getAll().then(
      (data) => {
        if (data.length > 0) {
          this.exportToExcel('cms',data)
        }
      }
    )
  }

  private exportToExcel(fileName, targetData) {
    if (targetData.constructor != Array) {
        console.error('Can not export error type data to excel.');
        return;
    }
    //alasql('SELECT * INTO XLSX("' + fileName + '.xlsx",{headers:true}) FROM ?', [targetData]);
    alasql('SELECT * INTO XLSX("' + fileName + '.xlsx",{headers:true}) FROM ?', [targetData]);
    // alasql('SELECT * INTO CSV("' + fileName + '.csv",{headers:true}) FROM ?', [targetData]);
  }
/*
  private convertArrayOfObjectsToCSV(args) : string {
    var result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data == null || !data.length) {
        return null;
    }

    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function(item) {
        ctr = 0;
        keys.forEach(function(key) {
            if (ctr > 0) result += columnDelimiter;

            result += '"' + item[key] + '"';
            ctr++;
        });
        result += lineDelimiter;
    });

    return result;
  }

  private downloadCSV(args) {

    var data, filename, link;
    var csv = this.convertArrayOfObjectsToCSV({
        data: args.data
    });
    if (csv == null) return;

    filename = args.filename || 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
  }
*/
}
