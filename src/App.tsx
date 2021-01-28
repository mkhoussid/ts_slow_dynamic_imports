import React from 'react';

type TSuspense = {
	iconName: string;
};
const MySuspense = React.memo(({ iconName }: TSuspense) => {
	const Component = React.lazy(() => import(`@material-ui/icons/${iconName}.js`));

	return (
		<React.Suspense fallback={<div />}>
			<Component />
		</React.Suspense>
	);
});

export default function App() {
	return <MySuspense iconName={'Done'} />;
}
