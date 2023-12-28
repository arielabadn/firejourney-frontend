function ProgressBarHorizontal(props) {
  const fireNumber = props.userData.fireNumber != null ? props.userData.fireNumber : 1200000;
  const fireNumberCompact = "$" + fireNumber.toLocaleString(
    'en-US', {
      maximumFractionDigits: 2,
      notation: 'compact',
      compactDisplay: 'short'
    });
  const fiPercentageNumber = props.userData.fiPercentage != null ? Math.round(props.userData.fiPercentage) : 33;
  const fiPercentage = fiPercentageNumber >= 0 ? fiPercentageNumber + "%" : "0%";

  return (
    <>
      <div className="flex flex-wrap gap-x-4 gap-y-4 pt-3">
        <dl>
          <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">
            FIRE Number
          </dt>
          <dd className="leading-none text-3xl font-bold text-gray-900 dark:text-gray-200">
            {fireNumberCompact}
          </dd>
        </dl>
        <div className="grow pt-0 pb-0">
          <h1 className="text-center text-sm font-normal text-gray-900 dark:text-gray-200">
            Your Progress
          </h1>
          <div id="chart">
            <div className="mx-auto flex flex-col items-center pt-1">
              <div className="h-5 w-full overflow-hidden rounded-md bg-gray-300 dark:bg-gray-400">
                <div
                  className="h-full bg-green-500"
                  style={{ width: fiPercentage }}
                ></div>
              </div>
              <span className="mt-1 text-xs text-gray-600 dark:text-gray-300">
                {fiPercentage}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgressBarHorizontal;
