import React, {useEffect, useRef, useState} from 'react';
import 'chart.js/auto';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {getHumidityDay} from "../../http/teplAPI";
Chart.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartDataLabels
);

const HumidityTime= ({day, name, type, name1}) => {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const [fetchedData, setFetchedData] = useState(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHumidityDay(day, type);
        console.log(data)
        setFetchedData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [day, type]);

  useEffect(() => {
    const canvas = chartContainerRef.current;
    const ctx = canvas.getContext('2d');

    if (chartRef.current) {
      chartRef.current.destroy();
    }
    if(fetchedData) {
      const {dates, counts} = fetchedData;
      chartRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: dates,
          datasets: [
            {
              label: name1 + ' за ' + name,
              data: counts,
              borderWidth: 2,
              pointRadius: 5,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            zoom: {
              pan: {
                enabled: true,
                mode: 'xy',
              },
              zoom: {
                wheel: {
                  enabled: true,
                },
                pinch: {
                  enabled: true,
                },
                mode: 'xy',
              },
            },
          },
        },
      });
    }
  }, [fetchedData]);
  useEffect(() => {
    const resizeHandler = () => {
      const chartContainer = chartContainerRef.current;
      const width = chartContainer.offsetWidth;
      const height = chartContainer.offsetHeight;
      setContainerSize({ width, height });
      if (chartRef.current) {
        chartRef.current.resize();
      }
    };

    window.addEventListener('resize', resizeHandler);
    resizeHandler();

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);
  return (
    <div className="chartContainer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '290px'}}>
        <canvas ref={chartContainerRef}  width={containerSize.width} height={containerSize.height}></canvas>
    </div>
  );
};

export default HumidityTime;
