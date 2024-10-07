export default function Footer() {
	return (
		<footer className="bg-soft-blue-foreground text-white text-center p-24">
			<p className="text-sm">&copy; 2024. All rights reserved.</p>
			<a
				href="https://linguolink-s3.s3.eu-central-1.amazonaws.com/legal/LinguoLink-Privacy-Policy.pdf"
				target="_blank"
				rel="noopener noreferrer"
			>
				Privacy Policy
			</a>
			{" | "}
			<a
				href="https://linguolink-s3.s3.eu-central-1.amazonaws.com/legal/LinguoLink-Terms.pdf"
				target="_blank"
				rel="noopener noreferrer"
			>
				Terms
			</a>
			<div>
				<a href="mailto:linguolink.app@gmail.com?subject=Inquiry%20from%20Linguolink%20Website">
					Contact Us
				</a>
			</div>
		</footer>
	);
}
