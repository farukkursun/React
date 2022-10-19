//* ====================== CLASS COMPONENTS AND STATE ======================
//* React taki Class-Components  ES6 class yapısını temel alır.
//* çok fazla boilerplate code a sahipler.
//* But, state lere sahip olabilirler
//* The state component hakkında data veya bilgi içermek için kullanılan yerleşik bir React object tidir. component in durumu zamanla değişebilir ;
//* ne zaman değişse component re-render olur.
//* this.state ile constructor da state için bir initial value atayabiliriz. constructor  dışında, state i setState() metoduyla değiştirebiliriz,
//* =========================================================================
import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.count || 0 };
    //!arrtir metodunu buradaki constructor a bağladık (bind ettik)
    this.arttir = this.arttir.bind(this);
  }

  arttir() {
    this.setState({ count: this.state.count + 1 });
  }
  //!arrow function kullandığımız zaman bind etmeye gerek yok
  azalt = () => {
    this.setState({ count: this.state.count - 1 });
  };
  //! Metodumuz default olarak class a bind değil, bu yüzden this keyword ünü kullanamıyoruz.
  //* React tarafından tanımlanan method lar default olarak class a bind edilir (bağlanır).
  //* Bu nedenle, metodlarımızı constructor daki class a bind etmeliyiz veya automatic binding için arrow function kullanabiliriz.
  render() {
    return (
      <div className="container text-center mt-4">
      <h1>***************************************************</h1>
        <h1>COUNT (class component):{this.state.count}</h1>

        <button className="btn btn-success" onClick={this.arttir}>
          INCREMENT
        </button>

        <button className="btn btn-dark" onClick={this.azalt}>
          DECREMENT
        </button>
      </div>
    );
  }
}

export default Counter;