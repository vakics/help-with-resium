import { CzmlDataSource } from "cesium";
import { Viewer, CzmlDataSource as resCzml} from 'resium';
import { useEffect, useState } from "react";

export const CzmlViewer=()=>{
    const [czmlDataSource, setCzmlDataSource] = useState<CzmlDataSource>();

  useEffect(() => {
    const loadCzmlData = async () => {
      try {
        const czmlData = await fetch(`public/paths/lne.czml`).then((response) => response.json());
        const czmlDataSource = new CzmlDataSource();
        await czmlDataSource.load(czmlData);
        setCzmlDataSource(czmlDataSource);
      } catch (error) {
        console.error("Error loading CZML data:", error);
      }
    };

    loadCzmlData();
  }, []);

}