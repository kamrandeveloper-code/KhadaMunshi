const fmt = (n: number) => "Rs " + n.toLocaleString("en-IN");

export function DashboardPhone() {
  return (
    <div className="phone" role="img" aria-label="KhadMunshi dashboard: lena, dena aur sales ek nazar mein (demo data)">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="app-top">
          <strong>KhadMunshi</strong>
          <span>Demo data</span>
        </div>
        <div className="kpi kpi-green">
          <small>Lena hai (Receivables)</small>
          <b>{fmt(1284500)}</b>
        </div>
        <div className="kpi kpi-red">
          <small>Dena hai (Payables)</small>
          <b>{fmt(436000)}</b>
        </div>
        <div className="kpi kpi-gray">
          <small>Aaj ki sale</small>
          <b>{fmt(87250)}</b>
        </div>
        <div className="app-list">
          <div><span>Chaudhry Bashir</span><b>{fmt(98000)}</b></div>
          <div><span>Malik Rafiq</span><b>{fmt(62000)}</b></div>
          <div><span>Haji Anwar</span><b>{fmt(41500)}</b></div>
        </div>
      </div>
    </div>
  );
}

export function StockPhone() {
  const rows = [
    ["DAP 50 kg", "86 bori", "ok"],
    ["Urea 50 kg", "142 bori", "ok"],
    ["Fungicide 500 g", "9 pack", "low"],
    ["Herbicide 1 L", "4 bottle", "low"],
    ["Beej gandum 40 kg", "58 bori", "ok"],
  ];
  return (
    <div className="phone" role="img" aria-label="KhadMunshi stock list: kaunsi khad aur dawai kitni bachi hai (demo data)">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="app-top">
          <strong>Stock</strong>
          <span>Demo data</span>
        </div>
        <div className="app-list">
          {rows.map(([n, q, s]) => (
            <div key={n}>
              <span>{n}</span>
              <b className={s === "low" ? "low" : ""}>{q}</b>
            </div>
          ))}
        </div>
        <div className="app-note">Kam stock wali cheezein laal mein dikhti hain.</div>
      </div>
    </div>
  );
}

export function KhataPhone() {
  const rows = [
    ["03 Oct", "Bill: 5 bori DAP", "+ Rs 41,000"],
    ["19 Oct", "Bill: 8 bori Urea", "+ Rs 27,200"],
    ["02 Nov", "Adaigi mili", "- Rs 20,000"],
  ];
  return (
    <div className="phone" role="img" aria-label="Kisan ka khata: bill aur adaigi ke saath baaki raqam (demo data)">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="app-top">
          <strong>Chaudhry Bashir</strong>
          <span>Demo data</span>
        </div>
        <div className="kpi kpi-red">
          <small>Kul baaki</small>
          <b>{fmt(48200)}</b>
        </div>
        <div className="app-list">
          {rows.map(([d, t, a]) => (
            <div key={d}>
              <span>
                <em>{d}</em> {t}
              </span>
              <b>{a}</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DashboardLaptop() {
  return (
    <div className="laptop" role="img" aria-label="KhadMunshi laptop par: dashboard aur khata list (demo data)">
      <div className="laptop-screen">
        <aside>
          <b>KhadMunshi</b>
          <span className="on">Dashboard</span>
          <span>Naya bill</span>
          <span>Kisan / Customers</span>
          <span>Products</span>
          <span>Khareed</span>
          <span>Suppliers</span>
        </aside>
        <div className="laptop-main">
          <div className="laptop-kpis">
            <div className="kpi kpi-green"><small>Lena hai</small><b>{fmt(1284500)}</b></div>
            <div className="kpi kpi-red"><small>Dena hai</small><b>{fmt(436000)}</b></div>
            <div className="kpi kpi-gray"><small>Is mahine ki sale</small><b>{fmt(1942800)}</b></div>
          </div>
          <table>
            <thead>
              <tr><th>Kisan</th><th>Gaon</th><th>Baaki</th><th>Due</th></tr>
            </thead>
            <tbody>
              <tr><td>Chaudhry Bashir</td><td>Chak 45</td><td>{fmt(98000)}</td><td>30 Apr</td></tr>
              <tr><td>Malik Rafiq</td><td>Chak 12</td><td>{fmt(62000)}</td><td>10 May</td></tr>
              <tr><td>Haji Anwar</td><td>Basti Mir</td><td>{fmt(41500)}</td><td>15 Apr</td></tr>
              <tr><td>Sardar Khalid</td><td>Chak 9</td><td>{fmt(27800)}</td><td>20 May</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="laptop-base" />
    </div>
  );
}
