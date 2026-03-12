export default function HelloWorld() {
  const propsUserCard = {
    nama: "Goku",
    nim: "999999",
    tanggal: "2025-01-01",
    Usia: "30",
  };

  return (
    <div>
      <h1>Hello World</h1>
      <img src="img/slay.jpg" alt="logo" width="100%" />
      <p>Selamat Belajar ReactJs</p>
      <GreetingBinjai />
      <QuoteText />
      <UserCard nama="nica" nim="2457301133" tanggal="2026/12/3" usia="20" />

      <UserCard
        nama="Nisa imut"
        nim="2457301133"
        tanggal="2026/12/03"
        usia="20"
      />

      <UserCard {...propsUserCard} />
    </div>
  );
}

function GreetingBinjai() {
  return <small>Salam dari Binjai</small>;
}

function QuoteText() {
  const text = "Mulutmu Harimaumu";
  const text2 = "Aku ingin jadi macan";
  return (
    <div>
      <hr />
      <p>{text.toLowerCase()}</p>
      <p>{text2.toUpperCase()}</p>
    </div>
  );
}

function UserCard(props) {
  return (
    <div>
      <hr />
      <h3>Nama: {props.nama}</h3>
      <p>NIM: {props.nim}</p>
      <p>Tanggal: {props.tanggal}</p>
      <p>Usia: {props.usia}</p>
    </div>
  );
}
