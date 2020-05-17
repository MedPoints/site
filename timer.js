const axios = require('axios');
const mysql = require("mysql2/promise");

const config = require('config');
const API_URL = config.get('API_URL');

const sleep = require('util').promisify(setTimeout);

async function run(interval = 1, lifetime = 60) {
  if (interval < 1) {
    interval = 1;
  }

  try {

    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "cabinets",
      password: "FFi1$dvVcNmxp67sX3%f_11"
    });

    const groupsResponse = await axios.get(`${API_URL}/api/groups/timer?interval=${lifetime}`);
    if (groupsResponse.data && groupsResponse.data.result && groupsResponse.data.result.length > 0) {
      const groups = groupsResponse.data.result;
      for (const group of groups) {
        await axios.delete(`${API_URL}/api/groups`, {
          data: {
            id: group.id,
          },
        });

        await connection.query('DELETE FROM `medicine_category` WHERE `mainId` = ?', [group.id]);

        console.log(`Removed group: ${group.id}`);

        for (const drug of group.drugs) {
          await axios.delete(`${API_URL}/api/drugs`, {
            data: {
              id: drug,
            },
          });

          await connection.query('DELETE FROM `medicine` WHERE `mainId` = ?', [drug]);

          console.log(`Removed grouped drug: ${drug}`);
        }
      }
    }

    const drugsResponse = await axios.get(`${API_URL}/api/drugs/timer?interval=${lifetime}`);

    if (drugsResponse.data && drugsResponse.data.result && drugsResponse.data.result.length > 0) {
      const drugs = drugsResponse.data.result;
      for (const drug of drugs) {
        await axios.delete(`${API_URL}/api/drugs`, {
          data: {
            id: drug,
          },
        });

        await connection.query('DELETE FROM `medicine` WHERE `mainId` = ?', [drug]);

        console.log(`Removed drug: ${drug}`);
      }
    }

    await connection.end();
  } catch (e) {
    console.log(e.message);
  }

  await sleep(interval * 60000);
  await run(interval, lifetime);
};

exports.run = run;