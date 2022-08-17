import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);

		return initialProps;
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="preload" href="/fonts/Open-Sans.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
					<link rel="preload" href="/fonts/Raleway.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
				</Head>
				<body className="bg-bg">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
