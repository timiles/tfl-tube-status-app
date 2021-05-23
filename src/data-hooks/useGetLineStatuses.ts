import useFetch, { IFetchStatus } from './useFetch';

export interface ILineStatus {
  id: string;
  name: string;
  lineStatuses: {
    statusSeverityDescription: string;
  }[];
}

export default function useGetLineStatuses(): IFetchStatus<ILineStatus[]> {
  const appId = process.env.APP_ID;
  const appKey = process.env.APP_KEY;
  const url = `https://api.tfl.gov.uk/Line/Mode/Tube/Status?app_id=${appId}&app_key=${appKey}`;
  return useFetch<ILineStatus[]>(url);
}
