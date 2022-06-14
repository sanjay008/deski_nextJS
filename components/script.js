import Document, { Html, Head, Main, NextScript } from "next/document";

export default function Script() {
	return (
		<>
			<NextScript />
			<script src="../vendor/jquery.min.js"></script>
			<script src="../vendor/popper.js/popper.min.js"></script>
			<script src="../vendor/bootstrap/js/bootstrap.min.js"></script>
			<script src="../vendor/mega-menu/assets/js/custom.js"></script>
			<script src="../vendor/aos-next/dist/aos.js"></script>
			<script src="../vendor/jquery.appear.js"></script>
			<script src="../vendor/jquery.countTo.js"></script>
			<script src="../vendor/slick/slick.min.js"></script>
			<script src="../js/theme.js"></script>
		
			<script src="../assets/js/dataTables.min.js"></script>
			<script src="../assets/js/custom.js"></script>
		</>
	)
}