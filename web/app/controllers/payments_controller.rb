class PaymentsController < ApplicationController
	include ShopifyApp::EmbeddedApp
	include ShopifyApp::RequireKnownShop
	include ShopifyApp::ShopAccessScopesVerification
  
	DEV_INDEX_PATH = Rails.root.join("frontend")
	PROD_INDEX_PATH = Rails.public_path.join("dist")

	def credit
	end
end
