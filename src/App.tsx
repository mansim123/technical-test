import React, {useState,useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [myData, setMyData] = React.useState([] as any);
  const [value, setValue] = React.useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  const dataArray: any[] = [];

  const getData = async () => {
    try {
      const res = await fetch(
        "https://randomuser.me/api?results=100&nat=us,dk,fr,gb,br"
      );
      const data = await res.json();

      data.results.forEach((item:any) => {
        const formattedYear = item.registered.date.slice(0, 4);
        if (formattedYear >= 2000 && formattedYear <= 2010) {
          dataArray.push(item);
        }
      });
      setMyData(dataArray);

    } catch (err) {
      console.log(err);
    }
  };

  // console.log(myData);

  const inputFilteredName = myData.filter((item:any) => {
    const fullName = `${item.name.first} ${item.name.last}`;
    const fullNameBackwards = `${item.name.last} ${item.name.first}`;
    return (
      fullName.toLowerCase().includes(value.toLowerCase()) ||
      fullNameBackwards.toLowerCase().includes(value.toLowerCase())
    );
  });

  const displayProfiles = inputFilteredName.map(function (item:any, i:number) {
    const formattedDate = `${item.registered.date.slice(8, 10)}-${item.registered.date.slice(5, 7)}-${item.registered.date.slice(0, 4)}`;
    const fullName = `${item.name.first} ${item.name.last}`;
    const animationTimer = i / 25;
    return (
      <figure style={{animation: `${1}s ease ${animationTimer}s normal forwards 1 fadein`}} className="xs:w-full sm:w-full md:w-1/2 lg:w-1/3 p-2 opacity-0" key={i}>
        <ul className="list bg-white p-2 rounded-lg border border-black shadow-lg" >
          <li className="flex items-center">
                <div className="w-1/4 pl-4">
                  <img className="rounded-full" src={item.picture.medium} title={fullName} alt={fullName} />
                </div>
                <div className="w-3/4">
                  <p className="font-sans leading-5 font-roboto pl-2">{fullName}</p>
                  <p className="font-sans leading-5 font-roboto pl-2">Registered: {formattedDate}</p>
                </div>
          </li>
        </ul>
      </figure>
    );
  });

  return (
    <main>
        <header className="filterCont bg-green-100 xs:items-center sm:flex flex-row flex-wrap xs:p-10 p-5 items-center">
              <div className="flex-auto mr-2 xs:w-full sm:w-1/3"><p className="xs:text-center text-right text-base font-roboto">Filter users by name:</p></div>
              <div className="flex-auto xs:ml-0 ml-2 xs:w-full sm:w-1/3">
                <input
                  className="p-3 border border-black rounded xs:block xs:m-auto xs:w-full xs:mt-4"
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
        </header>
        <section className="container flex flex-row flex-wrap mx-auto py-6">
          {inputFilteredName?.length ? displayProfiles : <ul className="items-center text-center p-5 m-auto opacity-0" style={isLoading ? {} : {animation: `1s ease 0.25s normal forwards 1 fadein`}}>
              
              <li className="bg-white p-10 rounded-lg border border-black shadow-lg items-center flex-row flex-wrap ">
                <div className="w-full">
                    <FontAwesomeIcon className="faTriangle text-7xl" icon={faTriangleExclamation}></FontAwesomeIcon>
                </div>
                <div className="w-full p-5">
                    <p>No results found, please search again</p>
                </div>
              </li>
            </ul>}
        </section>
    </main>
  );
}

export default App;
