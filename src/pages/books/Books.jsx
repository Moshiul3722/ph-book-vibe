import React, { useContext, useState } from "react";
import { BookContext } from "../../context/BookProvider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedBooks from "../../components/listedBooks/ListedBooks";
import ListedWishlist from "../../components/listedBooks/ListedWishlist";

const Books = () => {
  const [sortingType, setSortingType] = useState("");
  console.log(sortingType);
  // const { storedBooks, wishList } = useContext(BookContext);
  // console.log(storedBooks, wishList, "BookContext");
  return (
    <div className="container mx-auto my-3">
      <div className="flex justify-center">
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort by {sortingType} ⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setSortingType("pages")}>
              <a>Pages</a>
            </li>
            <li onClick={() => setSortingType("rating")}>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ListedBooks sortingType={sortingType} />
        </TabPanel>
        <TabPanel>
          <ListedWishlist sortingType={sortingType} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
