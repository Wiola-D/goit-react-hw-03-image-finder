import { ColorRing } from 'react-loader-spinner';

export const Loader = ({ isLoading }) => {
  return (
    <div className="Loader">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
};
// };
// import { DNA } from 'react-loader-spinner';

// export default function Loader() {
//   return (
//     <DNA
//       visible={true}
//       height="80"
//       width="80"
//       ariaLabel="dna-loading"
//       wrapperStyle={{
//         position: 'absolute',
//         left: '50%',
//         top: '10%',
//         transform: 'translateX(-50%)',
//       }}
//       wrapperClass="dna-wrapper"
//     />
//   );
// }
