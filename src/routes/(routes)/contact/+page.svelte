<script lang="ts">
	import Header from '../../../lib/Header.svelte';
	import Button from '../../../lib/Button.svelte';
</script>

<Header title="Kontakt" />
<div class="contact-container">
	<div class="flex gap-8 flex-col lg:flex-row">
		<div class="left-contact flex-[2]">
			<div class="contact-info text-white">
				<div class="flex justify-between items-center">
					<div class="grid grid-cols-[40px_1fr]">
						<i class="fas fa-map-marker-alt flex items-center text-lg" />
						<span>Location</span>
					</div>
					<p>Oslo, Norway</p>
				</div>
				<div class="flex justify-between items-center">
					<div class="grid grid-cols-[40px_1fr]">
						<i class="fas fa-envelope flex items-center text-lg" />
						<span>Email</span>
					</div>
					<p>misopetrik@gmail.com</p>
				</div>
				<div class="flex justify-between items-center">
					<div class="grid grid-cols-[40px_1fr]">
						<i class="fas fa-globe flex items-center text-lg" />
						<span>Languages</span>
					</div>
					<p>
						<span>English, Norwegian, German, Slovak</span>
					</p>
				</div>
			</div>
			<div class="flex mt-8">
				<Button
					icon="fab fa-linkedin"
					link="https://www.linkedin.com/in/michal-petrik-503b14129/"
				/>
				<Button icon="fab fa-github" link="https://github.com/vikingviolinist" />
			</div>
		</div>
		<div class="flex-[3]">
			<form
				class="flex flex-col gap-3 text-white [&>*]:bg-white dark:[&>*]:bg-gray-5 [&>*]:w-full [&>*]:rounded-2xl [&>*]:px-5 [&>*]:py-3
				[&>*]:outline [&>*]:shadow-lg"
			>
				<input type="text" required placeholder="Your name" />
				<input type="text" required placeholder="Your email" />
				<input type="text" required placeholder="Enter subject" />
				<textarea class="resize-none" cols="15" rows="10" placeholder="Message here..." />
			</form>
		</div>
	</div>
</div>
