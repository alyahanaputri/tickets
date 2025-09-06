const tours = [
  "https://assets.tours-tickets.com/eyJidWNrZXQiOiJhc3NldHMudjMudG91cnMtdGlja2V0cy5jb20iLCJrZXkiOiJ1cHNlbGxzL2NvdW50ci0zX3R4ZWZ6ZmdoLmpwZyIsImVkaXRzIjp7ImpwZWciOnsicXVhbGl0eSI6NTAsInByb2dyZXNzaXZlIjp0cnVlLCJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXplU2NhbnMiOnRydWV9LCJyZXNpemUiOnsid2lkdGgiOjgwMCwiaGVpZ2h0Ijo4MDAsImZpdCI6ImNvdmVyIn0sInNoYXJwZW4iOnRydWV9fQ==",
  "https://assets.tours-tickets.com/eyJidWNrZXQiOiJhc3NldHMudjMudG91cnMtdGlja2V0cy5jb20iLCJrZXkiOiJ1cHNlbGxzL3phYW5zZS0yX2F1d2g0ZWNvLmpwZyIsImVkaXRzIjp7ImpwZWciOnsicXVhbGl0eSI6NTAsInByb2dyZXNzaXZlIjp0cnVlLCJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXplU2NhbnMiOnRydWV9LCJyZXNpemUiOnsid2lkdGgiOjgwMCwiaGVpZ2h0Ijo4MDAsImZpdCI6ImNvdmVyIn0sInNoYXJwZW4iOnRydWV9fQ==",
  "https://assets.tours-tickets.com/eyJidWNrZXQiOiJhc3NldHMudjMudG91cnMtdGlja2V0cy5jb20iLCJrZXkiOiJ1cHNlbGxzL2dpZXRob29ybi10b3VyLWdhbGxlcnktaW1hZ2UtMl9jMl9nZnBocXIzYi5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjUwLCJwcm9ncmVzc2l2ZSI6dHJ1ZSwidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWl6ZVNjYW5zIjp0cnVlfSwicmVzaXplIjp7IndpZHRoIjo4MDAsImhlaWdodCI6ODAwLCJmaXQiOiJjb3ZlciJ9LCJzaGFycGVuIjp0cnVlfX0=",
  "https://assets.tours-tickets.com/eyJidWNrZXQiOiJhc3NldHMudjMudG91cnMtdGlja2V0cy5jb20iLCJrZXkiOiJ1cHNlbGxzL3JvdHRlci0yX2gxc2ZjYmJ3LmpwZyIsImVkaXRzIjp7ImpwZWciOnsicXVhbGl0eSI6NTAsInByb2dyZXNzaXZlIjp0cnVlLCJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXplU2NhbnMiOnRydWV9LCJyZXNpemUiOnsid2lkdGgiOjgwMCwiaGVpZ2h0Ijo4MDAsImZpdCI6ImNvdmVyIn0sInNoYXJwZW4iOnRydWV9fQ==",
  "https://assets.tours-tickets.com/eyJidWNrZXQiOiJhc3NldHMudjMudG91cnMtdGlja2V0cy5jb20iLCJrZXkiOiJ1cHNlbGxzL2JydWdlcy10b3VyLWdhbGxlcnktaW1hZ2UtMS1vbGQtYnJpZGdlc19jMl9jeTBha3l2dy5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjUwLCJwcm9ncmVzc2l2ZSI6dHJ1ZSwidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWl6ZVNjYW5zIjp0cnVlfSwicmVzaXplIjp7IndpZHRoIjo4MDAsImhlaWdodCI6ODAwLCJmaXQiOiJjb3ZlciJ9LCJzaGFycGVuIjp0cnVlfX0=",
  "https://assets.tours-tickets.com/eyJidWNrZXQiOiJhc3NldHMudjMudG91cnMtdGlja2V0cy5jb20iLCJrZXkiOiJ1cHNlbGxzL2NvdW50ci0zX2dvM2R0eGx1LmpwZyIsImVkaXRzIjp7ImpwZWciOnsicXVhbGl0eSI6NTAsInByb2dyZXNzaXZlIjp0cnVlLCJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXplU2NhbnMiOnRydWV9LCJyZXNpemUiOnsid2lkdGgiOjgwMCwiaGVpZ2h0Ijo4MDAsImZpdCI6ImNvdmVyIn0sInNoYXJwZW4iOnRydWV9fQ==",
  "https://assets.tours-tickets.com/eyJidWNrZXQiOiJhc3NldHMudjMudG91cnMtdGlja2V0cy5jb20iLCJrZXkiOiJ1cHNlbGxzL2NoYXJtby0zX2t3Ym54cG5jLmpwZyIsImVkaXRzIjp7ImpwZWciOnsicXVhbGl0eSI6NTAsInByb2dyZXNzaXZlIjp0cnVlLCJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXplU2NhbnMiOnRydWV9LCJyZXNpemUiOnsid2lkdGgiOjgwMCwiaGVpZ2h0Ijo4MDAsImZpdCI6ImNvdmVyIn0sInNoYXJwZW4iOnRydWV9fQ==",
  "https://assets.tours-tickets.com/eyJidWNrZXQiOiJhc3NldHMudjMudG91cnMtdGlja2V0cy5jb20iLCJrZXkiOiJ1cHNlbGxzL2JydXNzZS0yX2hkb2RhbHJiLmpwZyIsImVkaXRzIjp7ImpwZWciOnsicXVhbGl0eSI6NTAsInByb2dyZXNzaXZlIjp0cnVlLCJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXplU2NhbnMiOnRydWV9LCJyZXNpemUiOnsid2lkdGgiOjgwMCwiaGVpZ2h0Ijo4MDAsImZpdCI6ImNvdmVyIn0sInNoYXJwZW4iOnRydWV9fQ==",
  "https://assets.tours-tickets.com/eyJidWNrZXQiOiJhc3NldHMudjMudG91cnMtdGlja2V0cy5jb20iLCJrZXkiOiJ1cHNlbGxzL3ZvbGVuZGFtLW1hcmtlbi1saWtlLWEtbG9jYWwtZ2FsbGVyeS1pbWFnZS1zdHJvb3B3YWZlbHNfbzFxZGRsejIuanBnIiwiZWRpdHMiOnsianBlZyI6eyJxdWFsaXR5Ijo1MCwicHJvZ3Jlc3NpdmUiOnRydWUsInRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pemVTY2FucyI6dHJ1ZX0sInJlc2l6ZSI6eyJ3aWR0aCI6ODAwLCJoZWlnaHQiOjgwMCwiZml0IjoiY292ZXIifSwic2hhcnBlbiI6dHJ1ZX19",
  "https://assets.tours-tickets.com/eyJidWNrZXQiOiJhc3NldHMudjMudG91cnMtdGlja2V0cy5jb20iLCJrZXkiOiJ1cHNlbGxzL21hcmtlbmV4X2VsZmpuMm93LmpwZyIsImVkaXRzIjp7ImpwZWciOnsicXVhbGl0eSI6NTAsInByb2dyZXNzaXZlIjp0cnVlLCJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXplU2NhbnMiOnRydWV9LCJyZXNpemUiOnsid2lkdGgiOjgwMCwiaGVpZ2h0Ijo4MDAsImZpdCI6ImNvdmVyIn0sInNoYXJwZW4iOnRydWV9fQ==",
];
const names = [
  "Countryside and windmills tour from Amsterdam",
  "Zaanse Schans, Marken, Edam and Volendam Day Trip",
  "Giethoorn Tour",
  "Rotterdam, Delft & The Hague incl. Madurodam",
  "Bruges Tour",
  "Countryside Bike Tour",
  "Charm of Holland Tour including lunch",
  "Brussels Tour",
  "Volendam & Marken like a local",
  "Explore Marken & Volendam by e-bike",
];

const descriptions = [
  "Note: this is a demanding tour, with a lot of walking, some places visited are not accessible for wheelchairs Tour takes about 5.5 hours, including approx. 90 minute driving time in stages. For questions about the product, please contact [email protected]",
  "Note: this is a demanding tour, with quite a bit of walking. Tour takes about 7.5 hours, including approx. 90 minutes driving time in stages. For questions about the product, please contact [email protected]",
  "Ticket directly available on smartphone. Ticket can be rescheduled or cancelled up to 8 hours in advance. You can reschedule your tickets yourself via our self rebook page up to 24 hours in advance. More information, For questions about the product, please contact [email protected]. Free access to bathroom",
  "Tour takes about 9 hours, including approx. 3 hours driving time in stages. For questions about the product, please contact [email protected]",
  "A Visa is not required for this tour, however a valid ID document is. Tour includes approximately 3 hours driving time each way. For questions about the product, please contact hello@toursandtickets.nl",
  "For questions about the product, please contact hello@toursandtickets.nl ",
  "An up-close look at the windmills of Zaanse Schans, Demonstrations of how clogs, cheese, and stroopwafels are made, Tastings of cheese, wine, stroopwafels and stroopwafel liqueur, Walking tours in Zaanse Schans, Marken, Edam and Volendam, Admission to a working windmill, Cheese Factory, an Old Dutch Bakery, Wooden Shoe Factory and Museum of Marken, Boat trip on the Ijsselmeer, Lunch at a traditional Holland fish restaurant",
  "Comfortable bus with airconditioning, Around 1-hour guided city walk, Approximately 3.5 hours free time for shopping and sightseeing, Photo stop at the Atomium, Demonstration from a chocolatier, Chocolate tasting",
  "all activities need to be booked at the Ticket Office in Volendam (next to the Fotograaf Volendam, Haven 70) We strongly advise you to start your Volendam & Marken tour between 10:00 and 13:00. At the Ticket Office in Volendam, they can answer all your questions and queries, open daily from 10:00 to 18:00",
  "Pick up e-bike and ticket at: Ticket Office, at Fotograaf Volendam, Haven 70, Volendam. Minimum height for riding the bike is 150 cm or 4 feet and 11 inches, there are no child seats available. Rescheduling and cancellation possible up to 8 hours in advance",
];
const prices = [
  "€37.50",
  "€45",
  "€79",
  "€79",
  "€79",
  "€39.50",
  "€99",
  "€79",
  "€55",
  "€69.50",
];

const gallery = document.querySelector(".gallery");
const container = document.querySelector("#container");
const modalTitle = document.querySelector(".modal-title");
const modalDesc = document.querySelector(".modal-description");
const modalPrice = document.querySelector(".modal-price");

function buka(nama, desc, price) {
  container.style.display = "block";
  modalTitle.innerHTML = `${nama}`;
  modalDesc.innerHTML = `${desc}`;
  modalPrice.innerHTML = `${price}`;
}

function tutup() {
  container.style.display = "none";
}

function create(tour, nama, desc, price) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
      <div class="name-of-tour">${nama}</div>
      <div class="desc-of-tour">${desc}</div>
      <div class="price-of-tour">Harga: ${price}</div>
      `;
  div.style.backgroundImage = `url('${tour}')`;
  div.addEventListener("click", () => buka(nama, desc, price));
  return div;
}

function spawn() {
  for (let i = 0; i < tours.length; i++) {
    gallery.appendChild(create(tours[i], names[i], descriptions[i], prices[i]));
  }
}

spawn();
