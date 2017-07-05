/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './window.component.scss.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '../../src/window.component';
const styles_WcWindowComponent:any[] = [i0.styles];
export const RenderType_WcWindowComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:2,
    styles:styles_WcWindowComponent,data:{}});
export function View_WcWindowComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(2,[(_l()(),i1.ɵeld(0,(null as any),(null as any),9,'div',[['class',
      'wc-window-resize-corner']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),i1.ɵeld(0,(null as any),
      (null as any),0,'div',[['class','wc-window-left-top-corner']],(null as any),
      [[(null as any),'mousedown']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i2.WcWindowComponent = _v.component;
        if (('mousedown' === en)) {
          const pd_0:any = ((<any>_co.startResize($event,'left-top')) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),
      i1.ɵeld(0,(null as any),(null as any),0,'div',[['class','wc-window-left-bottom-corner']],
          (null as any),[[(null as any),'mousedown']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.WcWindowComponent = _v.component;
            if (('mousedown' === en)) {
              const pd_0:any = ((<any>_co.startResize($event,'left-bottom')) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n  '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),0,'div',[['class','wc-window-right-top-corner']],
          (null as any),[[(null as any),'mousedown']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.WcWindowComponent = _v.component;
            if (('mousedown' === en)) {
              const pd_0:any = ((<any>_co.startResize($event,'right-top')) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n  '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),0,'div',[['class','wc-window-right-bottom-corner']],
          (null as any),[[(null as any),'mousedown']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.WcWindowComponent = _v.component;
            if (('mousedown' === en)) {
              const pd_0:any = ((<any>_co.startResize($event,'right-bottom')) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n'])),(_l()(),
          i1.ɵted((null as any),['\n\n'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          9,'div',[['class','wc-window-resize-bar']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),
          i1.ɵeld(0,(null as any),(null as any),0,'div',[['class','wc-window-top-bar']],
              (null as any),[[(null as any),'mousedown']],(_v,en,$event) => {
                var ad:boolean = true;
                var _co:i2.WcWindowComponent = _v.component;
                if (('mousedown' === en)) {
                  const pd_0:any = ((<any>_co.startResize($event,'top')) !== false);
                  ad = (pd_0 && ad);
                }
                return ad;
              },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n  '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),0,'div',[['class','wc-window-right-bar']],
          (null as any),[[(null as any),'mousedown']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.WcWindowComponent = _v.component;
            if (('mousedown' === en)) {
              const pd_0:any = ((<any>_co.startResize($event,'right')) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n  '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),0,'div',[['class','wc-window-bottom-bar']],
          (null as any),[[(null as any),'mousedown']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.WcWindowComponent = _v.component;
            if (('mousedown' === en)) {
              const pd_0:any = ((<any>_co.startResize($event,'bottom')) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n  '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),0,'div',[['class','wc-window-left-bar']],
          (null as any),[[(null as any),'mousedown']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.WcWindowComponent = _v.component;
            if (('mousedown' === en)) {
              const pd_0:any = ((<any>_co.startResize($event,'left')) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n'])),(_l()(),
          i1.ɵted((null as any),['\n\n'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          41,'div',[['class','wc-window-header']],(null as any),[[(null as any),'mousedown']],
          (_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.WcWindowComponent = _v.component;
            if (('mousedown' === en)) {
              const pd_0:any = ((<any>_co.startDrag($event)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n\n  '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),3,'div',[['class','wc-window-title']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n    '])),i1.ɵncd((null as any),0),(_l()(),
          i1.ɵted((null as any),['\n  '])),(_l()(),i1.ɵted((null as any),['\n\n  '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),33,'div',[['class','wc-window-toolbar']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n\n    '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),6,'button',[['aria-label','minimize'],['class','window-control minimize'],
              ['tabindex','-1'],['title','Minimize']],(null as any),[[(null as any),
              'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.WcWindowComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.minimize($event)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n      '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),3,':svg:svg',[['aria-hidden','true'],
          ['height','10'],['version','1.1'],['width','10']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n        '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),0,':svg:path',
          [['d','M 0,5 10,5 10,6 0,6 Z']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n      '])),
      (_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵted((null as any),['\n\n    '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),6,'button',[['aria-label','restore'],
          ['class','window-control restore'],['tabindex','-1'],['title','Restore']],
          [[8,'hidden',0]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.WcWindowComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.restore($event)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n      '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),3,':svg:svg',[['aria-hidden','true'],
          ['height','10'],['version','1.1'],['width','10']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n        '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),0,':svg:path',
          [['d','m 2,1e-5 0,2 -2,0 0,8 8,0 0,-2 2,0 0,-8 z m 1,1 6,0 0,6 -1,0 0,-5 -5,0 z m -2,2 6,0 0,6 -6,0 z']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n      '])),(_l()(),i1.ɵted((null as any),['\n    '])),
      (_l()(),i1.ɵted((null as any),['\n\n    '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),6,'button',[['aria-label','maximize'],['class','window-control maximize'],
              ['tabindex','-1'],['title','Maximize']],[[8,'hidden',0]],[[(null as any),
              'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.WcWindowComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.maximize($event)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n      '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),3,':svg:svg',[['aria-hidden','true'],
          ['height','10'],['version','1.1'],['width','10']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n        '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),0,':svg:path',
          [['d','M 0,0 0,10 10,10 10,0 Z M 1,1 9,1 9,9 1,9 Z']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n      '])),(_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵted((null as any),
          ['\n\n    '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),6,'button',
          [['aria-label','close'],['class','window-control close'],['tabindex','-1'],
              ['title','Close']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.WcWindowComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.close()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n      '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),3,':svg:svg',[['aria-hidden','true'],
          ['height','10'],['version','1.1'],['width','10']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n        '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),0,':svg:path',
          [['d','M 0,0 0,0.7 4.3,5 0,9.3 0,10 0.7,10 5,5.7 9.3,10 10,10 10,9.3 5.7,5 10,0.7 10,0 9.3,0 5,4.3 0.7,0 Z']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n      '])),(_l()(),i1.ɵted((null as any),['\n    '])),
      (_l()(),i1.ɵted((null as any),['\n\n  '])),(_l()(),i1.ɵted((null as any),['\n\n'])),
      (_l()(),i1.ɵted((null as any),['\n\n'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          3,'div',[['class','wc-window-content']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n  '])),i1.ɵncd((null as any),
          1),(_l()(),i1.ɵted((null as any),['\n'])),(_l()(),i1.ɵted((null as any),
          ['\n']))],(null as any),(_ck,_v) => {
    var _co:i2.WcWindowComponent = _v.component;
    const currVal_0:boolean = !_co.maximized;
    _ck(_v,39,0,currVal_0);
    const currVal_1:any = _co.maximized;
    _ck(_v,47,0,currVal_1);
  });
}
export function View_WcWindowComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'wc-window',[['class',
      'wc-window'],['role','window']],[[2,'wc-window-opened',(null as any)],[2,'wc-window-minimized',
      (null as any)],[4,'top','px'],[4,'right','px'],[4,'bottom','px'],[4,'left','px']],
      [['document','mousemove'],['document','mouseup']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('document:mousemove' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,1).onMouseMove($event)) !== false);
          ad = (pd_0 && ad);
        }
        if (('document:mouseup' === en)) {
          const pd_1:any = ((<any>i1.ɵnov(_v,1).stopEvents($event)) !== false);
          ad = (pd_1 && ad);
        }
        return ad;
      },View_WcWindowComponent_0,RenderType_WcWindowComponent)),i1.ɵdid(49152,(null as any),
      0,i2.WcWindowComponent,([] as any[]),(null as any),(null as any))],(null as any),
      (_ck,_v) => {
        const currVal_0:any = i1.ɵnov(_v,1).opened;
        const currVal_1:any = i1.ɵnov(_v,1).minimized;
        const currVal_2:any = i1.ɵnov(_v,1).top;
        const currVal_3:any = i1.ɵnov(_v,1).right;
        const currVal_4:any = i1.ɵnov(_v,1).bottom;
        const currVal_5:any = i1.ɵnov(_v,1).left;
        _ck(_v,0,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5);
      });
}
export const WcWindowComponentNgFactory:i1.ComponentFactory<i2.WcWindowComponent> = i1.ɵccf('wc-window',
    i2.WcWindowComponent,View_WcWindowComponent_Host_0,{opened:'opened',top:'top',
        right:'right',bottom:'bottom',left:'left'},{},['wc-window-title','wc-window-content']);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvZW1lcnNvbi5zaWx2YS9Eb2N1bWVudHMvR2l0SHViL2FuZ3VsYXItd2luZG93LWNvbXBvbmVudC9zcmMvd2luZG93LmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy9lbWVyc29uLnNpbHZhL0RvY3VtZW50cy9HaXRIdWIvYW5ndWxhci13aW5kb3ctY29tcG9uZW50L3NyYy93aW5kb3cuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovVXNlcnMvZW1lcnNvbi5zaWx2YS9Eb2N1bWVudHMvR2l0SHViL2FuZ3VsYXItd2luZG93LWNvbXBvbmVudC9zcmMvd2luZG93LmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvZW1lcnNvbi5zaWx2YS9Eb2N1bWVudHMvR2l0SHViL2FuZ3VsYXItd2luZG93LWNvbXBvbmVudC9zcmMvd2luZG93LmNvbXBvbmVudC50cy5XY1dpbmRvd0NvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJ3Yy13aW5kb3ctcmVzaXplLWNvcm5lclwiPlxuICA8ZGl2IChtb3VzZWRvd24pPVwic3RhcnRSZXNpemUoJGV2ZW50LCAnbGVmdC10b3AnKVwiIGNsYXNzPVwid2Mtd2luZG93LWxlZnQtdG9wLWNvcm5lclwiPjwvZGl2PlxuICA8ZGl2IChtb3VzZWRvd24pPVwic3RhcnRSZXNpemUoJGV2ZW50LCAnbGVmdC1ib3R0b20nKVwiIGNsYXNzPVwid2Mtd2luZG93LWxlZnQtYm90dG9tLWNvcm5lclwiPjwvZGl2PlxuICA8ZGl2IChtb3VzZWRvd24pPVwic3RhcnRSZXNpemUoJGV2ZW50LCAncmlnaHQtdG9wJylcIiBjbGFzcz1cIndjLXdpbmRvdy1yaWdodC10b3AtY29ybmVyXCI+PC9kaXY+XG4gIDxkaXYgKG1vdXNlZG93bik9XCJzdGFydFJlc2l6ZSgkZXZlbnQsICdyaWdodC1ib3R0b20nKVwiIGNsYXNzPVwid2Mtd2luZG93LXJpZ2h0LWJvdHRvbS1jb3JuZXJcIj48L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwid2Mtd2luZG93LXJlc2l6ZS1iYXJcIj5cbiAgPGRpdiAobW91c2Vkb3duKT1cInN0YXJ0UmVzaXplKCRldmVudCwgJ3RvcCcpXCIgY2xhc3M9XCJ3Yy13aW5kb3ctdG9wLWJhclwiPjwvZGl2PlxuICA8ZGl2IChtb3VzZWRvd24pPVwic3RhcnRSZXNpemUoJGV2ZW50LCAncmlnaHQnKVwiIGNsYXNzPVwid2Mtd2luZG93LXJpZ2h0LWJhclwiPjwvZGl2PlxuICA8ZGl2IChtb3VzZWRvd24pPVwic3RhcnRSZXNpemUoJGV2ZW50LCAnYm90dG9tJylcIiBjbGFzcz1cIndjLXdpbmRvdy1ib3R0b20tYmFyXCI+PC9kaXY+XG4gIDxkaXYgKG1vdXNlZG93bik9XCJzdGFydFJlc2l6ZSgkZXZlbnQsICdsZWZ0JylcIiBjbGFzcz1cIndjLXdpbmRvdy1sZWZ0LWJhclwiPjwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJ3Yy13aW5kb3ctaGVhZGVyXCIgKG1vdXNlZG93bik9XCJzdGFydERyYWcoJGV2ZW50KVwiPlxuXG4gIDxkaXYgY2xhc3M9XCJ3Yy13aW5kb3ctdGl0bGVcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJ3Yy13aW5kb3ctdGl0bGVcIj48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJ3Yy13aW5kb3ctdG9vbGJhclwiPlxuXG4gICAgPGJ1dHRvbiBhcmlhLWxhYmVsPVwibWluaW1pemVcIiB0aXRsZT1cIk1pbmltaXplXCIgdGFiaW5kZXg9XCItMVwiIGNsYXNzPVwid2luZG93LWNvbnRyb2wgbWluaW1pemVcIiAoY2xpY2spPVwibWluaW1pemUoJGV2ZW50KVwiPlxuICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiB2ZXJzaW9uPVwiMS4xXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDAsNSAxMCw1IDEwLDYgMCw2IFpcIj48L3BhdGg+XG4gICAgICA8L3N2Zz5cbiAgICA8L2J1dHRvbj5cblxuICAgIDxidXR0b24gW2hpZGRlbl09XCIhbWF4aW1pemVkXCIgYXJpYS1sYWJlbD1cInJlc3RvcmVcIiB0aXRsZT1cIlJlc3RvcmVcIiB0YWJpbmRleD1cIi0xXCIgY2xhc3M9XCJ3aW5kb3ctY29udHJvbCByZXN0b3JlXCIgKGNsaWNrKT1cInJlc3RvcmUoJGV2ZW50KVwiPlxuICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiB2ZXJzaW9uPVwiMS4xXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJtIDIsMWUtNSAwLDIgLTIsMCAwLDggOCwwIDAsLTIgMiwwIDAsLTggeiBtIDEsMSA2LDAgMCw2IC0xLDAgMCwtNSAtNSwwIHogbSAtMiwyIDYsMCAwLDYgLTYsMCB6XCI+PC9wYXRoPlxuICAgICAgPC9zdmc+XG4gICAgPC9idXR0b24+XG5cbiAgICA8YnV0dG9uIFtoaWRkZW5dPVwibWF4aW1pemVkXCIgYXJpYS1sYWJlbD1cIm1heGltaXplXCIgdGl0bGU9XCJNYXhpbWl6ZVwiIHRhYmluZGV4PVwiLTFcIiBjbGFzcz1cIndpbmRvdy1jb250cm9sIG1heGltaXplXCIgKGNsaWNrKT1cIm1heGltaXplKCRldmVudClcIj5cbiAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdmVyc2lvbj1cIjEuMVwiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiPlxuICAgICAgICA8cGF0aCBkPVwiTSAwLDAgMCwxMCAxMCwxMCAxMCwwIFogTSAxLDEgOSwxIDksOSAxLDkgWlwiPjwvcGF0aD5cbiAgICAgIDwvc3ZnPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgPGJ1dHRvbiBhcmlhLWxhYmVsPVwiY2xvc2VcIiB0aXRsZT1cIkNsb3NlXCIgdGFiaW5kZXg9XCItMVwiIGNsYXNzPVwid2luZG93LWNvbnRyb2wgY2xvc2VcIiAoY2xpY2spPVwiY2xvc2UoKVwiPlxuICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiB2ZXJzaW9uPVwiMS4xXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDAsMCAwLDAuNyA0LjMsNSAwLDkuMyAwLDEwIDAuNywxMCA1LDUuNyA5LjMsMTAgMTAsMTAgMTAsOS4zIDUuNyw1IDEwLDAuNyAxMCwwIDkuMywwIDUsNC4zIDAuNywwIFpcIj48L3BhdGg+XG4gICAgICA8L3N2Zz5cbiAgICA8L2J1dHRvbj5cblxuICA8L2Rpdj5cblxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJ3Yy13aW5kb3ctY29udGVudFwiPlxuICA8bmctY29udGVudCBzZWxlY3Q9XCJ3Yy13aW5kb3ctY29udGVudFwiPjwvbmctY29udGVudD5cbjwvZGl2PlxuIiwiPHdjLXdpbmRvdz48L3djLXdpbmRvdz4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7b0JDQUE7TUFBQTtNQUFBLGdCQUFxQyx5Q0FDbkM7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFLO1VBQUE7VUFBQTtRQUFBO1FBQUw7TUFBQSxnQ0FBMkYseUNBQzNGO2FBQUE7VUFBQTtZQUFBO1lBQUE7WUFBSztjQUFBO2NBQUE7WUFBQTtZQUFMO1VBQUEsZ0NBQWlHO01BQ2pHO1VBQUE7WUFBQTtZQUFBO1lBQUs7Y0FBQTtjQUFBO1lBQUE7WUFBTDtVQUFBLGdDQUE2RjtNQUM3RjtVQUFBO1lBQUE7WUFBQTtZQUFLO2NBQUE7Y0FBQTtZQUFBO1lBQUw7VUFBQSxnQ0FBbUcsdUNBQy9GO2lCQUFBLDBCQUVOO1VBQUE7VUFBQSw4QkFBa0MseUNBQ2hDO2lCQUFBO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUs7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQUw7Y0FBQSxnQ0FBOEU7TUFDOUU7VUFBQTtZQUFBO1lBQUE7WUFBSztjQUFBO2NBQUE7WUFBQTtZQUFMO1VBQUEsZ0NBQWtGO01BQ2xGO1VBQUE7WUFBQTtZQUFBO1lBQUs7Y0FBQTtjQUFBO1lBQUE7WUFBTDtVQUFBLGdDQUFvRjtNQUNwRjtVQUFBO1lBQUE7WUFBQTtZQUFLO2NBQUE7Y0FBQTtZQUFBO1lBQUw7VUFBQSxnQ0FBZ0YsdUNBQzVFO2lCQUFBLDBCQUVOO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBOEI7Y0FBQTtjQUFBO1lBQUE7WUFBOUI7VUFBQSxnQ0FBOEQ7TUFFNUQ7VUFBQTtNQUE2QixrREFDM0Isa0JBQWtEO2lCQUFBLDBCQUM5QztNQUVOO1VBQUE7TUFBK0IsNkNBRTdCO1VBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtZQUE2RjtjQUFBO2NBQUE7WUFBQTtZQUE3RjtVQUFBLGdDQUF3SDtNQUN0SDtVQUFBO1VBQUEsNENBQTZEO1VBQUEsaUJBQzNEO1VBQUE7VUFBQSw4QkFBdUM7TUFDbkMsMkNBQ0M7TUFFVDtVQUFBO1VBQUE7WUFBQTtZQUFBO1lBQWdIO2NBQUE7Y0FBQTtZQUFBO1lBQWhIO1VBQUEsZ0NBQTBJO01BQ3hJO1VBQUE7VUFBQSw0Q0FBNkQ7VUFBQSxpQkFDM0Q7VUFBQTtVQUFBO01BQWdILDZDQUM1RztNQUNDLDZDQUVUO1VBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtZQUFrSDtjQUFBO2NBQUE7WUFBQTtZQUFsSDtVQUFBLGdDQUE2STtNQUMzSTtVQUFBO1VBQUEsNENBQTZEO1VBQUEsaUJBQzNEO1VBQUE7VUFBQSw0Q0FBNkQ7VUFBQSxlQUN6RCwyQ0FDQztVQUFBLGVBRVQ7VUFBQTtjQUFBO1lBQUE7WUFBQTtZQUFvRjtjQUFBO2NBQUE7WUFBQTtZQUFwRjtVQUFBLGdDQUFzRztNQUNwRztVQUFBO1VBQUEsNENBQTZEO1VBQUEsaUJBQzNEO1VBQUE7VUFBQTtNQUFxSCw2Q0FDakg7TUFDQywyQ0FFTDtNQUVGLHlDQUVOO1VBQUE7VUFBQSw4QkFBK0IsZ0RBQzdCO1VBQUEsR0FBb0QsdUNBQ2hEO1VBQUE7O0lBeEJNO0lBQVIsWUFBUSxTQUFSO0lBTVE7SUFBUixZQUFRLFNBQVI7Ozs7b0JDbENKO01BQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtVQUFBO1VBQUE7UUFBQTtRQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7TUFBQSxpRUFBQTtNQUFBOztRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBLFdBQUEsMkRBQUE7Ozs7OyJ9