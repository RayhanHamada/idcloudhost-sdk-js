import type { PayloadOf } from 'lib/types';
import { getUserInfo, modifyUserInfo } from 'lib/user';

export class SDK {
	/**
     * @param apiKey API key from idcloudhost
     * @see https://api.idcloudhost.com/#authentication
     */
	constructor(private readonly apiKey: string) {}

	/**
     * User
     */

	/**
     * @see https://api.idcloudhost.com/#get-user-info
     */
	async getUserInfo() {
		return getUserInfo(this.apiKey);
	}

	/**
     * @see https://api.idcloudhost.com/#modify-profile-info
     */
	async modifyProfileInfo(payload: PayloadOf<typeof modifyUserInfo>) {
		return modifyUserInfo(this.apiKey, payload);
	}

	/**
     *  Token
     */
	async deleteToken(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async updateToken(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async createToken(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async listToken(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	/**
     * Locations
     */
	async listLocation(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	/**
     * VM
     */
	async deleteVM(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async getVMInfo(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async changePassword(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async modifyVM(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async createVM(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async toggleAutoBackup(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async cloneVM(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async releasePublicIP(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async reservePublicIP(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async listVMs(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async rebuildFromReplica(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async deleteReplica(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async listReplica(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async convertReplica(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async startVM(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async stopVM(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async bootVMInRescueMode(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async addDisk(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async modifyDisk(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async deleteDisk(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	/**
     * Storage
     */
	async s3APIInfo(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async createBucket(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async modifyBucket(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async deleteBucket(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async getBucket(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async listBuckets(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async getS3User(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async deleteKey(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async getKeys(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async generateKey(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	/**
     * Private Networks
     */
	async getNetworkData(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async listNetworks(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async createOrGetDefaultNetwork(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async deleteNetwork(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async changeNetworkToDefault(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async changeNetworkName(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	/**
     * Floating IP
     */
	async createFloatingIP(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async listFloatingIPs(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async getFloatingIP(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async updateFloatingIP(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async deleteFloatingIP(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async assignFloatingIP(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async unassignFloatingIP(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	/**
     * Parameters
     */
	async VMParameters(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async VMImagesList(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async getPlainOSImages(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async getAppCatalogImages(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	/**
     * Billing
     */
	async listBillingAccountResources(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async setResourceBillingConf(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	/**
     * Payment
     */
	async deleteBillingAccount(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async billingAccountDetails(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async updateBillingAccount(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async configureRecurringPayment(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async listBillingAccounts(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async setDefaultBillingAccount(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async getUnpaidAmount(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async applyForInvoicePaying(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async removeCreditCard(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async creditCardDetails(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async addCreditCard(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async listCreditCard(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async setCardAsPrimary(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async listCredit(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async buyCredit(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async requestInvoiceForCreditTopUp(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async invoiceDetails(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async listInvoices(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async payAll(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async payAmount(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async payInvoice(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	/**
     * Pricing
     */
	async pricingPolicy(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async googleTagManagerKey(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	/**
     * Charging
     */
	async getResourceUsage(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	/**
     * Managed Services
     */
	async createServicePackage(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async listServicePackages(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async getServicePackage(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async updateServicePackageMetadata(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async getServiceSecrets(): Promise<void> {
		/**
         * TODO: implement
         */
	}

	async deleteServicePackage(): Promise<void> {
		/**
         * TODO: implement
         */
	}
}
