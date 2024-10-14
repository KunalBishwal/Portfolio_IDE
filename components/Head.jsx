import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Kunal Bishwal is a BTech student and learning new things."
      />
      <meta
        name="keywords"
        content="Kunal Bishwal,CODExKUN,vscode-portfolio"
      />
      <meta property="og:title" content="Kunal's Portfolio" />
      <meta
        property="og:description"
        content="DO WHATEVER YOUR MIND AND HEART BOTH SAYS"
      />
      <meta property="og:url" content="" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Kunal Bishwal',
};
