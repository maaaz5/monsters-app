import React, { useState, useEffect, ChangeEvent } from "react";
import { getData } from "./utils/fetch.utils";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchedkeyword, setSearchedkeyword] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    let filtredMons = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchedkeyword);
    });

    setFilteredMonsters(filtredMons);
  }, [monsters, searchedkeyword]);

  const searchField = (e: ChangeEvent<HTMLInputElement>) => {
    let Searchedkeyword = e.target.value.toLowerCase();
    setSearchedkeyword(Searchedkeyword);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Profiles</h1>
      <SearchBox
        onChangeHandler={searchField}
        className="monstsers-search-box"
        placeHolder="search monsters"
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
