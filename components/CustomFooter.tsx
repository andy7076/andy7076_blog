export default function PluginUI(props: any) {
  const handleToGongan = () => {
    window.open('http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002017713', '_blank');
  }

  return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', paddingBottom: 16 }}>
    <a style={{ fontSize: 12, padding: '0 8px 8px' }} href='https://beian.miit.gov.cn' target='_blank'>浙ICP备2023004975号-2</a>
    <div style={{ display: 'flex', alignItems: 'center', padding: '0 8px 8px', cursor: 'pointer' }} onClick={handleToGongan}>
      <img src="https://beian.mps.gov.cn/web/assets/logo01.6189a29f.png" style={{ width: 14, height: 14, marginRight: 4 }}></img>
      <a style={{ fontSize: 12, }} >浙公网安备33011002017713号</a>
    </div>
  </div>;
}
