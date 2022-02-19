import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASEURL } from "../Apiconfigs/urlConfigs";
import "./slider.css";
import "regenerator-runtime/runtime";

const Highlighters = () => {
  const [allPrizers, setAllPrizers] = useState([]);
  // const [multiWinners, setMultiWinners] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(BASEURL);
      modifyApiData(res.data.prizes);
      return res;
    }
    fetchData();
  }, [BASEURL]);

  function modifyApiData(initialApiData) {
    const modifiedPrizers = [];
    if (initialApiData.length > 0) {
      initialApiData.forEach((ele) => {
        const prizes = [];
        // fullName(ele.laureates);
        prizes.push(
          Object.assign({}, { category: ele.category, awardees: ele.laureates })
        );
        if (modifiedPrizers.length === 0) {
          modifiedPrizers.push(Object.assign({}, { year: ele.year, prizes }));
        } else if (
          modifiedPrizers.findIndex((obj) => obj.year === ele.year) >= 0
        ) {
          modifiedPrizers[
            modifiedPrizers.findIndex((obj) => obj.year === ele.year)
          ].prizes.push(
            Object.assign(
              {},
              { category: ele.category, awardees: ele.laureates }
            )
          );
        } else {
          modifiedPrizers.push(Object.assign({}, { year: ele.year, prizes }));
        }
      });
    }
    setAllPrizers(modifiedPrizers);
    // console.log(modifiedPrizers[1].prizes);
    // findTopAchievers(modifiedPrizers);
  }

  return (
    <>
      <div className="filter-area"></div>
      {allPrizers.map((eachObj, mainIndex) => {
        return (
          <div className="row" key={mainIndex}>
            <div>
              <h2>{eachObj.year}</h2>
            </div>
            <div className="cards-lists">
              {eachObj.prizes.map((element, index) => {
                return (
                  <div className="cards" key={index}>
                    <div className="card_title">
                      <h5>{element.category}</h5>
                    </div>
                    <div className="card_body">
                      {typeof element.awardees === "object" &&
                        element.awardees.map((val, i) => {
                          return (
                            <div>
                              <p key={i}>
                                {val.firstname.concat(" ", val.surname)}
                              </p>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Highlighters;
