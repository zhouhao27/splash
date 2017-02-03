import { Component, OnInit } from '@angular/core';
import { Video } from './video';
import { LocalDataSource } from 'ng2-smart-table';

declare var SimpleExcel;

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
    },
    attr: {
      id: "yahooTable"
    }
  };

  private yahooData: LocalDataSource;

  constructor() {
    this.yahooData = new LocalDataSource();
  }

  ngOnInit() {
  }

  // NOTICE: It will not work if the format changed in splash-video.com
  private update(value: string): void {
    // this.log += `Text changed to '${value}'\n`

    var video = new Video();
    var lines = value.split('\n');
    for(var i = 0;i < lines.length;i++){
      const line = lines[i];
      const array = line.split(':	');
      const key = array[0];
      const val = array[1];

      // title from headline
      if (key === 'Headline') {
        // remove SNTV -
        const data = val.split('SNTV - ')
        video.title = data[1];
      }

      // description from caption
      if (key === 'Caption') {
        const data = val.split(' Ref: ');
        video.description = data[0];
      }

      // duration from Length of clip (mm:ss)
      // to remove splash logo in end of the video should -3 from seconds
      if (key === 'Length of clip (mm:ss)') {
        const data = val.split(':')
        let m = data[0];
        let s = parseInt(data[1]) - 3;
        video.duration = m + ':' + s;
      }

      // from keywords to tag
      if (key === 'Keywords') {
        video.tag = val;
        // TODO: to get the first one as cast, mobile_cast etc
      }

      // from ref to filename
      if (key === 'REF') {
        video.filename = val.toLowerCase();
      }
    }

    // append video to videos
    let str = video.toYahoo()

    this.yahooData.add(JSON.parse(str));
    this.yahooData.reset();

    this.textValue = '';
  }

  private export() {

    this.yahooData.getAll().then(
      (data) => {
        if (data.length > 0) {
          // console.log(JSON.stringify(data))
          this.downloadCSV({filename:'yahoo.csv',data:data});

          // Doesn't work well
          // var blob = new Blob([document.getElementById('yahooTable').innerHTML], {
          //   type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
          // });
          // FileSaver.saveAs(blob, "yahoo.xls");

          // method 3
          // var xlsxWriter = new SimpleExcel.Writer.XLSX();
          // var xlsxSheet = new SimpleExcel.Sheet();
          // var Cell = SimpleExcel.Cell;
          // xlsxSheet.setRecord([
          //     [new Cell('ID', 'TEXT'), new Cell('Nama', 'TEXT'), new Cell('Kode Wilayah', 'TEXT')],
          //     [new Cell(1, 'NUMBER'), new Cell('Kab. Bogor', 'TEXT'), new Cell(1, 'NUMBER')],
          //     [new Cell(2, 'NUMBER'), new Cell('Kab. Cianjur', 'TEXT'), new Cell(1, 'NUMBER')],
          //     [new Cell(3, 'NUMBER'), new Cell('Kab. Sukabumi', 'TEXT'), new Cell(1, 'NUMBER')],
          //     [new Cell(4, 'NUMBER'), new Cell('Kab. Tasikmalaya', 'TEXT'), new Cell(2, 'NUMBER')]
          // ]);
          // xlsxWriter.insertSheet(xlsxSheet);
          // xlsxWriter.saveFile();
        }
      }
    )

    // FileSaver.js
    // let str = '[{"title":"News","description":"Great News 001","category":"Entertainment","secondCategory":"","tag":""}]';
    // let d = JSON.parse(str);
    // let str = [
    //     {"1":"one"},{"2":"two"}
    // ]
    // var d = JSON.stringify(str);
    // let blob = new Blob([d], {
    //   //type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-16le"
    //   // type: "application/vnd.ms-excel;charset=charset=utf-8"
    //   type: "text/csv;charset=utf-8"
    // });
    // FileSaver.saveAs(blob, "test.csv");

    //
    // let opts = { bookType:'xlsx', bookSST:false, type:'binary' };
    // let wbout = XLSX.write(d,opts);
    // FileSaver.saveAs(new Blob([this.s2ab(wbout)],{type:""}), "test.xlsx")

    // this.yahooData.getAll().then(
    //   (data) => {
    //     if (data.length > 0) {

    //       console.log(JSON.stringify(data))
    //       // write(JSON.stringify(data),'out.xls')
    //     }
    //   }
    // )
  }

  private s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
  }

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

}
