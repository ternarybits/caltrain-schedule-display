javascript:(function (){
  var newcss = '';
  // Remove extraneous elements
  var newcss = newcss + '.footer, .logo, .breadcrumb, .PageTitle { display: none; }';
  // Remove border around the content
  var newcss = newcss + '.ipf-caltrain-stationselector { -moz-box-shadow: 0px 0px #fff; -webkit-box-shadow: 0px 0px #fff; box-shadow: 0px 0px #fff; }';
  // Make everything bigger by default
  var newcss = newcss + 'body { font-size: 250%; }';
  // Reduce page margins
  var newcss = newcss + '.gridContainer { width: 100% !important; padding: 0; }';
  // San Francisco
  var newcss = newcss + '.ipf-caltrain-stationselector-header { font-size: 120%; }';
  // as of ...
  var newcss = newcss + '.ipf-caltrain-stationselector-header span { width: 70%; text-align: right; right: 0.1em; }';
  // SOUTHBOUND DEPARTURES
  var newcss = newcss + '.ipf-st-ip-trains-table-dir-td1 { font-size: 100%; }';
  var newcss = newcss + 'table.ipf-caltrain-table-trains th div { background: white; border-bottom: 0px; }';
  // schedule
  var newcss = newcss + 'table.ipf-caltrain-table-trains td { font-size: 100%; }';
  // This display provides...
  var newcss = newcss + '.ipf-caltrain-stationselector-displaytext p { font-size: 30%; }';
  // Alerts
  var newcss = newcss + '.ipf-caltrain-stationselector-alerts table th div { font-size: 100%; }';
  var newcss = newcss + '.ipf-caltrain-stationselector-alerts table td { font-size: 40%; vertical-align: middle; }';

  if ('\v'=='v') /* ie only */ {
      document.createStyleSheet().cssText = newcss;
  } else {
      var tag = document.createElement('style'); tag.type = 'text/css'; document.getElementsByTagName('head')[0].appendChild(tag);
      tag[ (typeof document.body.style.WebkitAppearance=='string') /* webkit only */ ? 'innerText' : 'innerHTML'] = newcss;
  }
})();
