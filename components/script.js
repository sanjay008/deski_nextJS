import Document, { Html, Head, Main, NextScript } from "next/document";

export default function Script() {
	return (
		<>
			<NextScript />
			<script src="../vendor/jquery.min.js" strategy="beforeInteractive"></script>
			<script src="../vendor/bootstrap/js/bootstrap.min.js" strategy="lazyOnload"></script>
			<script src="../vendor/mega-menu/assets/js/custom.js" strategy="lazyOnload"></script>
			<script src="../vendor/aos-next/dist/aos.js" strategy="lazyOnload" ></script>
			<script src="../vendor/jquery.appear.js" strategy="lazyOnload"></script>
			<script src="../vendor/jquery.countTo.js" strategy="lazyOnload"></script>
			<script src="../vendor/slick/slick.min.js" strategy="lazyOnload"></script>
			<script src="../js/theme.js" strategy="lazyOnload"></script>
		
			<script src="../assets/js/dataTables.min.js" ></script>
			<script src="../assets/js/custom.js"></script>
		</>
	)
}