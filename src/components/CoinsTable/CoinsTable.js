import Pagination from "../Pagination/Pagination";
import "./CoinsTable.scss";

// const filteredData = cryptosList?.data?.coins.filter((coin) =>
//       coin.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

class CoinsTable {
  constructor(coins) {
    this.coinsTable = document.createElement("div");

    this.coinsTable.className = "CoinsTable";

    const table = coins.map(
      (coin) => `
			<tr key=${coin.name}>
				<td><img class="CurrencyLogo" src=${coin.imageUrl} alt="Currency Logo" /></td>
				<td title=${coin.fullName}>${coin.name}</td>              
				<td>$ ${coin.price}</td>
				<td>${coin.change24h}</td>
				<td>
					<span>
						<strong>${coin.icon}</strong> 
						${coin.volume24Hour}
					</span>
				</td>
			</tr>
		`,
    );

    this.coinsTable.innerHTML = `
			<table>
				<thead>
					<th className="TableRow__header">
					<th>Name</th>
					<th>Price</th>
					<th>Change24h</th>
					<th>Volume24Hour</th>
				</thead>
				<tbody>${table}</tbody>
			</table>
		`.replace(/,/g, "");

		this.coinsTable.append(new Pagination)

    return this.coinsTable;
  }
}

export default CoinsTable;
